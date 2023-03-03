import PageBanner from "../../../components/pageBanner";

interface Props {
  params: {
    slug: string;
  };
}

async function getProject(slug: string) {
  const res = await fetch(`../api/project/${slug}`);
  return await res.json();
}

const ProjectPage = async ({ params }: Props) => {
  const project = await getProject(params.slug);
  return (
    <>
      <PageBanner>project.name</PageBanner>
      <main>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
      </main>
    </>
  );
};

export default ProjectPage;
