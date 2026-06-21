"use client";

import { useEffect, useRef, useState, useCallback } from "react";

import * as d3 from "d3";
import * as d3Geo from "d3-geo";

import { FeatureCollection, Geometry } from "geojson";

import { circuits, telemetryStats } from "../../data/dashboard.mock";
import { Circuit } from "../../types/dashboard.types";
import TelemetryStatCard from "./TelemetryStatCard";
import MapTooltip from "./MapTooltip";

const routes = [
  ["Miami GP", "Monaco GP"],
  ["Monaco GP", "Singapore GP"],
  ["Singapore GP", "Suzuka GP"],
];

interface TooltipState {
  circuit: Circuit;
  x: number;
  y: number;
}

export default function WorldMap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  const handleMouseMove = useCallback(
    (event: MouseEvent, circuit: Circuit, svgX: number, svgY: number) => {
      const container = containerRef.current;
      const svg = svgRef.current;
      if (!container || !svg) return;

      const rect = svg.getBoundingClientRect();
      const scaleX = rect.width / 1000;
      const scaleY = rect.height / 420;

      setTooltip({
        circuit,
        x: svgX * scaleX + 12,
        y: svgY * scaleY - 48,
      });
    },
    [],
  );

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 1000;
    const height = 420;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const projection = d3Geo
      .geoMercator()
      .scale(145)
      .translate([width / 2, height / 1.6]);

    const pathGenerator = d3Geo.geoPath(projection);

    d3.json<FeatureCollection<Geometry>>("/world.geojson").then((data) => {
      if (!data) return;

      svg
        .append("g")
        .selectAll("path")
        .data(data.features)
        .join("path")
        .attr("d", pathGenerator)
        .attr("fill", "#141820")
        .attr("stroke", "#2a211e")
        .attr("stroke-width", 0.4);

      const routesLayer = svg.append("g").attr("class", "routes");

      const circuitMap = new Map(circuits.map((c) => [c.name, c]));

      routes.forEach(([from, to]) => {
        const start = circuitMap.get(from);
        const end = circuitMap.get(to);
        if (!start || !end) return;

        const p1 = projection([start.longitude, start.latitude]);
        const p2 = projection([end.longitude, end.latitude]);
        if (!p1 || !p2) return;

        const midX = (p1[0] + p2[0]) / 2;
        const midY = (p1[1] + p2[1]) / 2 - 80;

        const routePath = `M ${p1[0]} ${p1[1]} Q ${midX} ${midY} ${p2[0]} ${p2[1]}`;

        routesLayer
          .append("path")
          .attr("d", routePath)
          .attr("fill", "none")
          .attr("stroke", "#ff6548")
          .attr("stroke-width", 1.5)
          .attr("stroke-opacity", 0.45)
          .attr("stroke-dasharray", "6 6");
      });

      function animateRoute() {
        routesLayer
          .attr("stroke-dashoffset", 0)
          .transition()
          .duration(4000)
          .ease(d3.easeLinear)
          .attr("stroke-dashoffset", -120)
          .on("end", animateRoute);
      }

      animateRoute();

      const markers = svg.append("g").attr("class", "markers");

      circuits.forEach((circuit) => {
        const coords = projection([circuit.longitude, circuit.latitude]);
        if (!coords) return;

        const [x, y] = coords;
        const isLive = circuit.status === "live";

        const markerGroup = markers
          .append("g")
          .attr("class", "circuit-marker")
          .style("cursor", "pointer");

        if (isLive) {
          const pulse = markerGroup
            .append("circle")
            .attr("cx", x)
            .attr("cy", y)
            .attr("r", 18)
            .attr("fill", "none")
            .attr("stroke", "#ff6548")
            .attr("stroke-width", 1);

          function animatePulse() {
            pulse
              .attr("r", 18)
              .attr("opacity", 0.8)
              .transition()
              .duration(1800)
              .attr("r", 34)
              .attr("opacity", 0)
              .on("end", animatePulse);
          }

          animatePulse();
        }

        markerGroup
          .append("circle")
          .attr("cx", x)
          .attr("cy", y)
          .attr("r", isLive ? 16 : 12)
          .attr(
            "fill",
            isLive ? "rgba(255,101,72,.3)" : "rgba(255,101,72,.12)",
          );

        markerGroup
          .append("circle")
          .attr("cx", x)
          .attr("cy", y)
          .attr("r", 5)
          .attr("fill", isLive ? "#ff6548" : "#c6aaa0");

        const labelWidth = circuit.name.length * 5.5 + 12;

        markerGroup
          .append("rect")
          .attr("x", x + 8)
          .attr("y", y - 10)
          .attr("width", labelWidth)
          .attr("height", 18)
          .attr("fill", "rgba(10,10,10,.9)")
          .attr("stroke", isLive ? "rgba(255,101,72,.4)" : "#2a211e")
          .attr("stroke-width", 0.5)
          .attr("rx", 2);

        markerGroup
          .append("text")
          .attr("x", x + 14)
          .attr("y", y + 2)
          .text(circuit.name)
          .attr("fill", isLive ? "#ff6548" : "#8d6f67")
          .attr("font-size", "9px")
          .attr("font-family", "Geist Mono, monospace")
          .attr("letter-spacing", "0.04em")
          .attr("pointer-events", "none");

        markerGroup
          .append("circle")
          .attr("cx", x)
          .attr("cy", y)
          .attr("r", 20)
          .attr("fill", "transparent")
          .on("mouseenter", function (event) {
            d3.select(this.parentNode as SVGGElement)
              .select("circle:nth-child(3)")
              .transition()
              .duration(150)
              .attr("r", 7);

            handleMouseMove(event as unknown as MouseEvent, circuit, x, y);
          })
          .on("mousemove", function (event) {
            handleMouseMove(event as unknown as MouseEvent, circuit, x, y);
          })
          .on("mouseleave", function () {
            d3.select(this.parentNode as SVGGElement)
              .select("circle:nth-child(3)")
              .transition()
              .duration(150)
              .attr("r", 5);

            setTooltip(null);
          });
      });
    });
  }, [handleMouseMove]);

  return (
    <div ref={containerRef} className="w-full overflow-hidden relative">
      <svg
        ref={svgRef}
        viewBox="0 0 1000 420"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      />

      {tooltip && (
        <MapTooltip
          name={tooltip.circuit.name}
          status={tooltip.circuit.status.toUpperCase()}
          temperature={tooltip.circuit.temperature}
          x={tooltip.x}
          y={tooltip.y}
        />
      )}

      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
        {telemetryStats.map((stat) => (
          <TelemetryStatCard key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  );
}
