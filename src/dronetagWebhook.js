import { supabase } from "./supabaseClient.js";

export default async function dronetagWebhook(req, res) {
  try {
    const payload = req.body;

    console.log("📡 Dronetag webhook payload:", JSON.stringify(payload));

    const {
      deviceId,
      timestamp,
      position = {},
      battery,
      status
    } = payload;

    const {
      lat,
      lon,
      altMSL,
      altAGL,
      speed,
      heading,
      vertSpeed
    } = position;

    // Insert into Supabase
    const { error } = await supabase.from("dronetag_positions").insert({
      device_id: deviceId,
      timestamp: timestamp ? new Date(timestamp) : new Date(),
      lat,
      lon,
      alt_msl: altMSL,
      alt_agl: altAGL,
      speed,
      heading,
      vert_speed: vertSpeed,
      battery,
      status,
      company_id: null
    });

    if (error) {
      console.error("❌ Supabase insert error:", error);
      return res.status(500).send("Database error");
    }

    return res.status(200).send("OK");
  } catch (err) {
    console.error("❌ Webhook handler error:", err);
    return res.status(500).send("Internal server error");
  }
}
