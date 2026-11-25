(function () {
  const supabaseUrl = "https://bmipvkgirttoqlnzxgys.supabase.co";
  const supabaseKey = "sb_publishable_p78LXedCgBv8pyjph7kGaA_T6rj5CDa";

  const client = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
  );

  window.timePlusSupabase = {
    client,
    supabaseUrl,
    supabaseKey
  };
})();
