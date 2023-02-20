import DesignStudioService from "../Interfaces/DesignStudioService";
import design from "../Assets/Icons/designStudio.svg";
import motion from "../Assets/Icons/motionStudio.svg";
import graphic from "../Assets/Icons/graphicStudio.svg";
import branding from "../Assets/Icons/brandingStudio.svg";

export const designStudioService: DesignStudioService[] = [
  {
    title: "UI/UX Desiging",
    description:
      "Having a professionally designed website legitimises the intentions of your business.",
    icon: design,
  },
  {
    title: "Branding",
    description:
      " Powerful branding goes deeper than appearances. It is the holistic way of how you deliver your product.",
    icon: branding,
  },
  // {
  //     title : "Graphic Design",
  //     description : "Aliquam ut sapien viverra blandit nisi. Nam fames suscipit erat sed id. Risus.",
  //     icon : graphic
  // },
  // {
  //     title : "Motion Graphics",
  //     description : "Pulvinar amet ac potenti quam feugiat praesent maecenas. Platea id egestas.",
  //     icon : motion
  // }
];
