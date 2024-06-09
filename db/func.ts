async function GetAllBlogs() {
  const response = await fetch('https://api.saidevdhal.xyz/v1/all/blogs', {
    next: { revalidate: 5 },
  });
  const data = await response.json();
  return data;
}

async function GetAllProjects() {
  const response = await fetch('https://api.saidevdhal.xyz/v1/all/projects', {
    next: { revalidate: 15 },
  });
  const data = await response.json();
  return data;
}

async function GetAllReviews() {
  const response = await fetch('https://api.saidevdhal.xyz/v1/all/testimonials', {
    next: { revalidate: 15 },
  });
  const data = await response.json();
  return data;
}

async function GetAllLabels() {
  const response = await fetch('https://api.saidevdhal.xyz/v1/all/labels', {
    next: { revalidate: 15 },
  });
  const data = await response.json();
  return data;
}

export { GetAllBlogs, GetAllProjects, GetAllReviews, GetAllLabels}