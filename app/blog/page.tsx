'use client'
import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { comfortaa } from "../../lib/fonts";

async function getAllProjects() {
  const res = await fetch(`../api/projects?highlight=1`);
  const data = await res.json();
  return data;
}

const Blog = () => {

  return (
  <main className={comfortaa.className}>
    <h1>Under Development</h1>
    <Link href="/" passHref>
        <FontAwesomeIcon icon={faHome} />
    </Link>

  </main>
  );
};

export default Blog;
