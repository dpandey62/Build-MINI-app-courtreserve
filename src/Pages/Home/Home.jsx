 //import React from "react";

// // Home page sections
// import FancyBanner from  "../../Components/FancyBanner/FancyBanner";
// import AboutClub from "../../Components/AboutClub/AboutClub";
// import Facilities from "../../Components/Facilities/Facilities";
// import PopularCourts from "../../Components/PopularCourts/PopularCourts";
// import Promotions from "../../Components/Promotions/Promotions";
// import Testimonials from "../../Components/Testimonials/Testimonials";

//  import Location from "../../Components/Location/Location";
// import Newsletter from "../../Components/Newsletter/Newsletter";

// const Home = () => {
//   return (
//     <main className="w-full overflow-x-hidden">

//       {/* Hero Section */}
//       <section className="mb-16">
//         <FancyBanner />
//       </section>

//       {/* About Club */}
//       <section className="mb-16">
//          <AboutClub />
//       </section>

//       {/* Facilities */}
//       <section className="mb-16 bg-gray-50 py-10">
//         <Facilities />
//       </section>

//       {/* Popular Courts */}
//       <section className="mb-16">
//         <PopularCourts />
//       </section>

//       {/* Promotions */}
//       <section className="mb-16 bg-primary/5 py-10">
//         <Promotions />
//       </section>

//       {/* Testimonials */}
//       <section className="mb-16">
//         <Testimonials />
//       </section>

      //  {/* Location */}
      // <section className="mb-16">
      //    <Location />
      //  </section>

//       {/* Newsletter */}
//       <section className="mb-20">
//         <Newsletter />
//       </section>

//     </main>
//   );
// };

// export default Home;

import FancyBanner from "../../Components/FancyBanner/FancyBanner";
import AboutClub from "../../Components/AboutClub/AboutClub";
import Facilities from "../../Components/Facilities/Facilities";
import Location from "../../Components/Location/Location";
import Newsletter from "../../Components/Newsletter/Newsletter";

const Home = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <section className="mb-20">
        <FancyBanner />
      </section>

         <section className=" mb-20">
        <AboutClub />
      </section>

      <section className="mb-20 bg-gray-50 py-16">
        <Facilities />
      </section>

      <section className="mb-20">
        <Location />
      </section>

      <section className="mb-24">
        <Newsletter />
      </section>
      
    </main>
  );
};

export default Home;
