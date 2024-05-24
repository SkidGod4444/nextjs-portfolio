async function GetAllBlogs() {
  const response = await fetch('https://api.saidevdhal.xyz/v1/all/blogs', {
    next: { revalidate: 5 },
  });
  const data = await response.json();
  return data;
}

async function GetAllProjects() {
  const response = await fetch('https://api.saidevdhal.xyz/v1/all/projects', {
    next: { revalidate: 5 },
  });
  const data = await response.json();
  return data;
}

export { GetAllBlogs, GetAllProjects}