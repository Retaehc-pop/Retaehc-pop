"use client";
import { useEffect, useState } from "react";

async function getProject(name: string) {
  const res = await fetch(`../api/project/${name}`);
  const data = await res.json();
  return data;
}

export default function Page({ params }: { params: { name: string } }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProject(params.name).then((projects) => {
      setProjects(projects);
    });
  }, []);

  return (
    <div>
      <h1>My Post: {params.name}</h1>
    </div>
  );
}
