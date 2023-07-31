export const GA_TRACKING_ID = "G-B3E279FWGR";

export const pageview = (url: string, title: string) => {
  (window as any).gtag("event", "page_view", {
    page_location: url,
    page_title: title,
    page_path: window.location.pathname,
  });
};
interface Props {
  action: string;
  category: string;
  label: string;
  value: string;
}
export const event = ({ action, category, label, value }: Props) => {
  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
