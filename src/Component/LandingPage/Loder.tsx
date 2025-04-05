import { IconCloud } from "../../Component/magicui/IconCloud";

const images = [
    "https://logo.clearbit.com/amazon.com",
    "https://logo.clearbit.com/microsoft.com",
    "https://logo.clearbit.com/google.com",
    "https://logo.clearbit.com/apple.com",
    "https://logo.clearbit.com/facebook.com",
    "https://logo.clearbit.com/netflix.com",
    "https://logo.clearbit.com/adobe.com",
    "https://logo.clearbit.com/ibm.com",
    "https://logo.clearbit.com/intel.com",
    "https://logo.clearbit.com/tesla.com",
    "https://logo.clearbit.com/spotify.com",
    "https://logo.clearbit.com/salesforce.com",
    "https://logo.clearbit.com/twitter.com",
    "https://logo.clearbit.com/oracle.com",
    "https://logo.clearbit.com/sap.com",
    "https://logo.clearbit.com/paypal.com",
    "https://logo.clearbit.com/linkedin.com",
    "https://logo.clearbit.com/slack.com",
    "https://logo.clearbit.com/zoom.us",
    "https://logo.clearbit.com/shopify.com",
    "https://logo.clearbit.com/snapchat.com",
    "https://logo.clearbit.com/dropbox.com",
    "https://logo.clearbit.com/uber.com",
    "https://logo.clearbit.com/airbnb.com",
  ];
  

export function Loder() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background -mt-8">
      <IconCloud images={images} />
    </div>
  );
}
