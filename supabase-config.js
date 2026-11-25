
(function () {
  const supabaseUrl = "https://bmipvkgirttoqlnzxgys.supabase.co";
  const supabaseKey = "sb_publishable_p78LXedCgBv8pyjph7kGaA_T6rj5CDa";

  if (
    !window.supabase ||
    typeof window.supabase.createClient !== "function"
  ) {
    console.error("Supabase library is not loaded.");
    return;
  }

  const client = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
  );

  client.supabaseUrl = supabaseUrl;
  client.supabaseKey = supabaseKey;

  window.timePlusSupabase = client;
})();
