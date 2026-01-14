import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rzuuztffvzwhfoslnhnm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6dXV6dGZmdnp3aGZvc2xuaG5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzOTEyNzUsImV4cCI6MjA4Mzk2NzI3NX0.xvW27TxlDSafy9r_GBkcl4krJEunIi9sprZiW5MjN8c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
