const defaultEndpoint = "https://script.google.com/macros/s/AKfycbxmXdp2a6Yu3vck_vg-jgw1OO7i3DGyl2AGJkEQJfQfqdzMs2_GXbXA62oR4VFLKT4CUQ/exec";

export const formBackend = {
  // Vercel can override this with NEXT_PUBLIC_FORM_ENDPOINT. The public
  // Apps Script URL remains as a fallback so the form cannot silently lose
  // submissions when a deployment environment variable is omitted.
  endpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT?.trim() || defaultEndpoint,
};
