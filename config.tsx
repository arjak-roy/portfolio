/* eslint-disable react-refresh/only-export-components */
import {
  redirect,
  Form,
  useLoaderData,
  useActionData,
  type ActionFunctionArgs,
} from "react-router";

// 1. Client-side Loader: Checks if the user is securely logged in
export async function loader() {
  const isAuthenticated = localStorage.getItem("adminId") === "authorized";
  if (!isAuthenticated) {
    return Response.json({ isAuthenticated: false, data: null });
  }

  // TODO: Load existing profile photo, experience, and projects from your DB/storage here
  return Response.json({ 
    isAuthenticated: true, 
    data: { photo: "", experience: [] as unknown[], projects: [] as unknown[] } 
  });
}

// 2. Client-side Action: Handles Login and Dashboard Updates
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = formData.get("intent");

  // Handle Login
  if (intent === "login") {
    const username = formData.get("username");
    const password = formData.get("password");

    // Securely check credentials against the server's environment variables
    if (
      username === (import.meta.env.VITE_ADMIN_USERNAME || "admin") &&
      password === (import.meta.env.VITE_ADMIN_PASSWORD || "password")
    ) {
      localStorage.setItem("adminId", "authorized");
      return redirect("/config");
    }
    return Response.json({ error: "Invalid credentials.", message: null }, { status: 401 });
  }

  // Handle Logout
  if (intent === "logout") {
    localStorage.removeItem("adminId");
    return redirect("/config");
  }

  // --- Protected Actions Below ---
  const isAuthenticated = localStorage.getItem("adminId") === "authorized";
  if (!isAuthenticated) {
    return Response.json({ error: "Unauthorized", message: null }, { status: 401 });
  }

  if (intent === "update-photo") {
    // TODO: Process photo upload
    return Response.json({ error: null, message: "Photo updated successfully!" });
  }

  if (intent === "update-experience") {
    // TODO: Update experience in your DB
    return Response.json({ error: null, message: "Experience updated!" });
  }

  if (intent === "update-projects") {
    // TODO: Update projects in your DB
    return Response.json({ error: null, message: "Projects updated!" });
  }

  return Response.json({ error: "Unknown action", message: null }, { status: 400 });
}

// 3. React Component: Renders the UI
export default function ConfigRoute() {
  const { isAuthenticated } = useLoaderData() as unknown as { isAuthenticated: boolean; data: unknown };
  const actionData = useActionData() as unknown as { error?: string; message?: string } | undefined;

  // Render Login Form if not authenticated
  if (!isAuthenticated) {
    return (
      <div style={{ maxWidth: "400px", margin: "100px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h2>Admin Console Login</h2>
        {actionData?.error && <p style={{ color: "red" }}>{actionData.error}</p>}
        <Form method="post" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input type="hidden" name="intent" value="login" />
          <input type="text" name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Secure Login</button>
        </Form>
      </div>
    );
  }

  // Render Dashboard if authenticated
  return (
    <div style={{ padding: "40px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Admin Console</h2>
        <Form method="post">
          <input type="hidden" name="intent" value="logout" />
          <button type="submit">Logout</button>
        </Form>
      </header>
      
      {actionData?.message && <p style={{ color: "green" }}>{actionData.message}</p>}

      <section style={{ marginTop: "20px" }}>
        <h3>Edit Profile Photo</h3>
        <Form method="post" encType="multipart/form-data">
          <input type="hidden" name="intent" value="update-photo" />
          <input type="file" name="photo" accept="image/*" />
          <button type="submit">Upload Photo</button>
        </Form>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h3>Edit Experience Log</h3>
        <Form method="post">
          <input type="hidden" name="intent" value="update-experience" />
          {/* Add your experience form fields here */}
          <textarea name="experienceData" placeholder="Describe new experience..." />
          <button type="submit">Save Experience</button>
        </Form>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h3>Edit Projects</h3>
        <Form method="post">
          <input type="hidden" name="intent" value="update-projects" />
          {/* Add your project form fields here */}
          <input type="text" name="projectName" placeholder="Project Name" />
          <button type="submit">Save Project</button>
        </Form>
      </section>
    </div>
  );
}
