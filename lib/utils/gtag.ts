export const GA_TRACKING_ID = "UA-213526771-1";

export const pageview = (url: string, title: string) => {
  (window as any).gtag("config", GA_TRACKING_ID, {
    page_location: url,
    page_title: title,
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
