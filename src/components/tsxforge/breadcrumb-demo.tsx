"use client";

import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbEllipsis,
} from "./breadcrumb";

export function BreadcrumbBasicDemo() {
  return (
    <div className="flex justify-center w-full p-8 border rounded-xl bg-muted/20">
      <Breadcrumb>
        <BreadcrumbLink to="/">Home</BreadcrumbLink>
        <BreadcrumbLink to="/docs/$">Docs</BreadcrumbLink>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </Breadcrumb>
    </div>
  );
}

export function BreadcrumbEllipsisDemo() {
  return (
    <div className="flex justify-center w-full p-8 border rounded-xl bg-muted/20">
      <Breadcrumb>
        <BreadcrumbLink to="/">Home</BreadcrumbLink>
        <BreadcrumbEllipsis />
        <BreadcrumbLink to="/docs/$">Docs</BreadcrumbLink>
        <BreadcrumbPage>Details</BreadcrumbPage>
      </Breadcrumb>
    </div>
  );
}
