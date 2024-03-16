import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "../design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing" crosses>
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translte-y-1/2 pointer-events-none">
            <img src={stars} alt="stars" width={950} height={400} />
          </div>
        </div>
        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        <div className="relative ">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <a
          className="font-code text-xs font-bold tracking-wider cursor-pointer underline"
          href="/pricing"
        >
          See the full details
        </a>
      </div>
    </Section>
  );
};

export default Pricing;
