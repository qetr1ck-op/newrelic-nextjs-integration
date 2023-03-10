export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const pageview = (url: string) => {
  // @ts-ignore
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
// @ts-ignore
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
