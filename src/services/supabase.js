import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://lraslwpaaoigakncdnwf.supabase.co/";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyYXNsd3BhYW9pZ2FrbmNkbndmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MjE5NzMsImV4cCI6MjA5NzE5Nzk3M30.U5K9V13igpLrV86ft_KL7zWblguSN_Ob1I1iqxWtdn0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
