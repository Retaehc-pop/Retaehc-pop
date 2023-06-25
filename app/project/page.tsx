'use client'
import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
async function getAllProjects() {
  const res = await fetch(`../api/projects?highlight=1`);
  const data = await res.json();
  return data;
}

const Project = () => {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    getAllProjects().then((data) => setProjects(data));
  }
  , []);

  return (
  <main>
    <h1>Under Development</h1>
    <Link href="/" passHref>
      <a>
        <FontAwesomeIcon icon={faHome} />
      </a>
    </Link>

  </main>
  );
};

export default Project;
