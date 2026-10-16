module.exports = async (req, res) => {
  const r = await fetch(
    "https://juayaeiyvmwteqgssfhx.supabase.co/rest/v1/freq_aulas?select=id&limit=1",
    { headers: { apikey: "sb_publishable_j4wJGZdJKAeNchELx-6peQ_smN2bgjP" } }
  );
  res.status(200).json({ ok: r.ok, status: r.status, em: new Date().toISOString() });
};
