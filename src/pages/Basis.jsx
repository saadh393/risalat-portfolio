import { Helmet } from "react-helmet";
import Hamburger from "../components/Hamburger";
import Navigation from "../components/basis/Navigation";
import "../styles/basis.css";

export default function Basis() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dr. Muhammad Risalat Siddique, Ballot 04 </title>
        <link rel="canonical" href="https://risalatsiddique.com/basis" />
        <meta
          name="description"
          content="দ্যা ম্যান অফ স্টীল (চেয়ারম্যান) | অ্যানালাইজেন বাংলাদেশ লিমিটেড পরিচালক ও সিইও | ক্রান্তি অ্যাসোসিয়েটস লিমিটেড"
        />
        <meta
          property="og:og:description"
          content="Digital Transformation Learntrepreneur for Brands, Finance, Marketing, Social and Infrastructure Development Sectors"
        />
        <meta property="og:image" content="/images/basis/meta-image-basis.png" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
      </Helmet>
      <Navigation />

      <div className="basis-banner mt-[60px]">
        <div className="max-w-7xl mx-auto px-3 md:px-8 h-full items-center justify-center gap-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
          <div className="self-start md:self-center flex-1 text-center md:text-left text-white h-fit order-2 md:order-1 ">
            <h2 className="font-bold text-4xl lg:text-5xl">ড. মুহম্মদ রিসালাত সিদ্দীক</h2>
            <p className="text-base md:text-xl lg:font-medium lg:text-2xl my-4">
              দ্যা ম্যান অফ স্টীল (চেয়ারম্যান) | অ্যানালাইজেন বাংলাদেশ লিমিটেড
            </p>
            <p className="text-base md:text-xl lg:font-medium lg:text-2xl my-2">
              পরিচালক ও সিইও | ক্রান্তি অ্যাসোসিয়েটস লিমিটেড
            </p>
            {/* <p className="text-base md:text-xl lg:font-semibold lg:text-2xl my-2">ক্যাটাগরি: জেনারেল</p> */}
            <button className="bg-white font-bold px-6 py-3 shadow-lg rounded-md text-violet-700 text-lg my-4">
              ব্যালট নং ০৪
            </button>
          </div>

          <div className="flex-1 h-full order-1 md:order-2">
            <img
              src="/images/basis/risalat.png"
              className="object-cover h-full avater-img object-bottom max-h-[550px]"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 md:px-8 text-[#67469c] py-4 basis-content mt-6">
        <p>
          আপনারা সবাই জানেন, বাংলাদেশের তথ্যপ্রযুক্তি খাত কিন্তু একটি টিপিং পয়েন্ট বা ক্রান্তি লগ্ন পার করছে।
          প্রযুক্তিতে সারা বিশ্ব চতুর্থ শিল্প বিপ্লব পার করে পঞ্চম শিল্প বিপ্লবের দিকে এগোচ্ছে। অপরদিকে আমরাও LDC বা
          নিম্ন আয়ের দেশ থেকে গ্র্যাজুয়েট করে সামনের দিকে এগোচ্ছি। কোভিড ও কোভিড পরবর্তী রাশিয়া-ইউক্রেন যুদ্ধের কারণে
          বৈশ্বিক অর্থনৈতিক মন্দাও আমাদের তথ্যপ্রযুক্তি খাতে আরেকটি নতুন চ্যালেঞ্জ তৈরি করেছে।
        </p>
        <p>
          এরকম একটি পরিস্থিতিতে, আমি মনে করি এই ইন্ডাস্ট্রির প্রতিটি মেম্বারদেরই প্রার্থীদের কাছে তাদের বেসিস নিয়ে
          সামনের দিনগুলির পরিকল্পনাটি কী সেটা জানবার পূর্ণ অধিকার বর্তায়। আর প্রতিটি প্রার্থীরই তার এই পরিকল্পনা নিয়ে
          স্বচ্ছতা ও জবাবদিহিতা থাকতে হবে।
        </p>

        <p>
          তা নাহলে কোন ভিত্তিতে আপনারা আমাকে নির্বাচিত করবেন! বেসিস নির্বাচন নিশ্চয়ই শুধু নামের জোরে প্রভাব খাটিয়ে,
          বাহ্যিক চাকচিক্য দেখিয়ে কিংবা খাতিরের সম্পর্ক থেকে ভোট চাইবার জায়গা নয়। এখানে প্রতিটি প্রার্থীর থাকা চাই সঠিক
          দিক নির্দেশনা ও একটি সামগ্রিক ভিশন। একটু ধৈর্য্য ধরে আমার সাথে থাকুন। আমি ঠিক সেই বিষয়টি নিয়েই আপনাদের সামনে
          কথা বলতে এসেছি।
        </p>

        <h2 id="টানাপোড়েন">আমাদের টানাপোড়েন এর সংসার:</h2>
        <p>
          আপনারা খেয়াল করেছেন কী না, আমাদের তথ্য প্রযুক্তি ব্যবসায় আমরা কিন্তু একটা অদ্ভুত সমস্যার মধ্য দিয়ে যাই। আমরা
          একটি ইন্টেলেকচুয়াল সোসাইটি বা বুদ্ধিজীবি সমাজের অংশ হওয়ায় কেমন যেন অনেকটা একটা মধ্যবিত্ত টাইপ সমস্যায় আমরা
          ভুগি। একটি জ্ঞানভিত্তিক ইন্ডাস্ট্রি হওয়ায়, না আমরা এদিকে, না ওইদিকে! না পারছি রাস্তায় নেমে আন্দোলন করতে, আবার
          না পারি অভাব অনটনের কথা কাউকে বলতে, পাছে লোকে কিছু বলে!
        </p>
        <p>এই অবস্থা থেকে উত্তরণের জন্য আমাদের চাই সবাইকে সাথে নিয়ে একটি সামগ্রিক রূপান্তর।</p>
        <p className="font-bold">
          সেই রূপান্তরের জন্য টিম স্মার্ট এর একজন সদস্য হিসেবে, আমার দক্ষতা ও অভিজ্ঞতার জায়গা থেকে আমি যেই অংশগুলোকে
          চিহ্নিত করে কাজ করতে চাই, সেগুলো হলো:
        </p>

        <div>
          <img src="/images/basis/steps.png" className="object-cover w-full lg:w-8/12 h-full mx-auto my-4 " />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 md:px-8 text-[#67469c] py-4 basis-content">
        <p>আসুন এখন একটু বিস্তারিত জেনে নেবার চেষ্টা করি এই বিষয়গুলো নিয়ে – </p>

        <h2>১. প্রত্যক্ষ ও পরোক্ষ ভাবে কর রেয়াত ও বিনিয়োগ অব্যাহত রাখা কেন প্রয়োজন?</h2>

        <p>
          করোনা মহামারীর পর থেকে যখনই আমরা একটু একটু করে উঠে দাঁড়াচ্ছি তখনই মড়ার উপর খাড়ার ঘা এর মতো আমাদের সামনে এসে
          দাঁড়িয়েছে কর রেয়াত সুবিধা তুলে নেয়ার মতো অবস্থাটি। অথচ কর রেয়াত সুবিধা অব্যাহত রাখা আসলে সরকারের পক্ষ থেকে
          একটি পরোক্ষ বিনিয়োগ। আবেগ কিংবা আবদার নয়, আমরা কথা বলছি তথ্য ও গবেষণা দিয়ে।
        </p>
        <p>
          আপনারা জেনে থাকবেন যে, বৈশ্বিক বিভিন্ন স্টাডি থেকে উঠে এসেছে, এক স্ট্যান্ডার্ড ডেভিয়েশন যখন আইসিটি সেক্টরে
          বাড়ে, সেটা জিডিপতে ১% কন্ট্রিবিউট করে। অপরদিকে আইএমএফ এর-ই একটি রিসার্চে দেখা যাচ্ছে, মধ্যপ্রাচ্যের যেসব দেশ
          তেল ভিত্তিক অর্থনীতির দেশ সেখানে সাধারণ খাতে ১ ইউনিট বিনিয়োগে ১.৮ ইউনিট রিটার্ন আসে। কিন্তু সেই বিনিয়োগটিই যদি
          তথ্যপ্রযুক্তি খাতে করা হয়, তাতে ২.৮ ইউনিট রিটার্ন পাওয়া যায়। মানে খুব সহজ ভাষায় বলতে গেলে, তথ্যপ্রযুক্তিতে
          আমরা এক টাকা বিনিয়োগ করলে প্রায় তিন টাকার মতো রিটার্ন পাওয়ার সুযোগ তৈরি হয়।{" "}
        </p>
        <p>
          অন্যদিকে, সেক্টর হিসেবে আমরা কর্মচারীদের বেতন বাবদ ৯০০ কোটি টাকা এবং লোকাল মার্কেট সার্ভিস বাবদ ৩০০ কোটি টাকা
          দেই। এর সাথে কর রেয়াত সুবিধা তুলে নিলে, সর্বসাকুল্যে সরকার হয়তো ৪০০-৫০০ কোটি টাকা পাবে। কিন্তু তাতে আমরা
          আন্তর্জাতিক ও লোকাল মার্কেটে প্রাইস কম্পিটিটিভনেস হারাবে আমাদের ৫০ বিলিয়ন ডলারের ‘স্মার্ট বাংলাদেশ’ এর স্বপ্ন
          হয়তো আঁতুরঘরেই মারা যাবে।{" "}
        </p>
        <p>
          কিন্তু IMF এর প্রতিবেদন অনুযায়ী, আমাদের ‘ট্যাক্স টু জিডিপি রেশিও’ ঠিক করার জন্য আরো ২.৫ লক্ষ কোটি টাকার
          অতিরিক্ত ট্যাক্স দরকার। সেইজন্যই, তথ্যপ্রযুক্তির খাতে সরকার এই কর না নিয়ে যদি তথ্যপ্রযুক্তি খাতে আরো ৫০০ কোটি
          টাকা বিনিয়োগ করে, তখন আমরা আর্টিফিশিয়াল ইন্টেলিজেন্স, মেশিন লার্নিং, বিহ্যাভিয়ার অ্যানালাইসিস, ডেটা
          অ্যানালাইটিকস এর মাধ্যমে সরকারকে জানিয়ে দিতে পারবো যে কোথায় কোথায় কর ফাঁকি হচ্ছে এবং কারা অনৈতিক সুযোগ নিচ্ছে।
          এটা করার ভিত্তিতেই এই ২.৫ লক্ষ্য কোটি টাকার ট্যাক্স প্রবৃদ্ধিতে আমরাই সরকারকে সাহায্য করতে পারবো। এসব তথ্য
          উপাত্ত কিন্তু আমাদের সরাসরি বলে দিচ্ছে, এই কর রেয়াত সুবিধা অব্যাহত রাখা প্রত্যক্ষ ও পরোক্ষ উভয়ভাবে আমাদের
          অর্থনীতির জন্য কতখানি গুরুত্ববহন করে।
        </p>
        <p>
          আমরা বাংলাদেশ সরকারের স্মার্ট বাংলাদেশ ২০৪১ বিনির্মাণের লক্ষ্যে আমাদের এই কর রেয়াত সুবিধা অব্যাহত রাখার সুবিধা
          গুলো নিয়ে যুক্তি নির্ভর আলোচনা চালিয়ে যাবো।
        </p>

        <iframe
          width="800"
          height="450"
          className="mx-auto"
          src="https://www.youtube.com/embed/tRfpzebFUns?si=cACrykxgEpxL_Q1j"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <h2>২. প্রিসিশন মার্কেটিং এর মাধ্যমে ‘মেইড ইন বাংলাদেশ' এর ব্র্যান্ডিং কী?</h2>

        <div className="lg:flex mb-6 items-center">
          <img
            src="/images/basis/prcision-market.png"
            alt=""
            className="max-h-[400px] object-contain mx-auto mb-6 lg:mb-0"
          />
          <div>
            <p>
              আমাদের যেই যেই জায়গা গুলোতে এক্সপার্টিজ ন্যাচারালি ডেভালাপ করছে, সে জায়গা গুলো টার্গেট করে আমাদের
              অন্ট্রারপ্রনার তৈরি করতে হবে। এবং সেই অন্ট্রারপ্রনারদের কে প্রিসিশন মার্কেটিং দ্বারা আমাদের বাজারে প্রমোট
              করার ব্যবস্থা করে দিতে হবে। শুধু ‘মেইড ইন বাংলাদেশ’ বলে বলে বাংলাদেশ যেন একটি ‘Software Sweatshop’ না হয়ে
              যায়!
            </p>
            <p>
              আমাদের একদম ফানেল ধরে ধরে, টার্গেট কান্ট্রি ধরে ধরে, টার্গেট কাস্টোমার ধরে ধরে, প্রযুক্তির সাব-সেক্টর
              ভিত্তিক প্রিসিশন মার্কেটিং করতে হবে। যাতে বিশ্ব দরবারে আমাদের দেশের আইটি সার্ভিস ব্র্যান্ডিং টা ‘Cheap
              Destination’ হিসেবে না হয়ে , ‘Top Class IT Service Provide’ হিসেবে পরিচিত হয়।
            </p>
          </div>
        </div>

        <iframe
          width="800"
          height="450"
          className="mx-auto"
          src="https://www.youtube.com/embed/75WAWSCVa-U?si=cACrykxgEpxL_Q1j"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <h2>৩. কেন দরকার তথ্যপ্রযুক্তির সাব সেক্টর ভিত্তিক নীতিমালা?</h2>
        <p>
          আধুনিক বিশ্বের সাথে তাল মিলিয়ে আমাদের তথ্যপ্রযুক্তিখাত কিন্তু আর ওয়ান ডাইমেনশনাল নেই। এটি একটি মাল্টি
          ডাইমেনশনাল খাতে রূপান্তরিত হয়েছে। আমাদের এই শিল্পে ইআরপি, সিস্টেম ইন্ট্রিগ্রেশন, এড-টেক, ফিনটেক, মার্কেটিং
          টেক, গেমিং, এবং ফ্রন্টিয়ার টেক এর মতো বিভিন্ন সুনির্দিষ্ট ধারা উপধারা সৃষ্টি হয়েছে। সেই সাথে আছে এআই এর একটি
          বিশদ আবির্ভাব।
        </p>

        <p>
          এই সব কিছু মিলিয়ে আমাদের কিন্তু আগের মতো গতানুগতিক ধারায় যে পলিসি তৈরির কাজগুলো হয়ে আসছিলো, সামনে সেই একই
          কায়দায় কাজ করবার সুযোগ আর নেই। আমাদের এখন চিন্তাভাবনাটা এমনভাবেই পরিবর্তন করতে হবে, ঠিক যেভাবে আমাদের
          তথ্যপ্রযুক্তি খাতের জটিলতা ও ব্যাপ্তিটা বাড়ছে।
        </p>
        <img src="/images/basis/basis-announcement.png" alt="" className="max-h-[400px] mx-auto rounded-md" />

        <h2>৪. মেধা সম্পদ বা ইন্টেলেকচুয়াল প্রপার্টির ভিত্তিতে ঋণ-অর্থায়নের পলিসি কেন চাই?</h2>
        <p>
          তথ্যপ্রযুক্তি একই সাথে একটি পণ্য এবং সেবা। কিন্তু এখনো আমাদের ব্যাংকিং প্রক্রিয়াগুলি জ্ঞান-ভিত্তিক শিল্প
          ((knowledge-based industry)) এর জন্য পুরোপুরি ভাবে গড়ে উঠতে পারেনি। যার ফলে এই যে ‘ধরা যায় না, ছোঁয়া যায় না’
          এরকম একটি মেধা সম্পদ (intellectual property) এর উপর ভিত্তি করে কোনো ব্যাংক থেকে ঋণ পাওয়া কিন্তু খুবই কষ্টসাধ্য
          হয়ে দাঁড়ায়। অথচ একজন নতুন উদ্যোক্তার জন্য এই অর্থায়নটা কিন্তু প্রথমদিকেই সবচেয়ে বেশি প্রয়োজন পড়ে।
        </p>

        <p>
          কিন্তু দেখুন, অন্যান্য পণ্য ভিত্তিক ব্যবসার ক্ষেত্রে বিষয়টি কিন্তু এরকম নয়! অথচ সেসকল খাত গুলো বিদেশি টাকা
          আনার ক্ষেত্রে ১০-১৫% নেট ভ্যালু অ্যাড করছে অপরদিকে আমাদের তথ্যপ্রযুক্তি খাত কিন্তু ১০০% বিদেশি টাকাটাই ঘরে
          আনছে, কারণ নিজেদের মেধাশ্রম-ই এই খাতে আমাদের বিনিয়োগ। তাই অর্থায়ন ব্যবস্থার আধুনিকায়ন এখন সময়ের দাবি।
        </p>

        <p className="font-bold">
          উপরের এই চারটি সমস্যা থেকে উত্তরণের পথে যেতেই, টিম স্মার্ট এর বাকি ইন্ডিভিজ্যুয়াল সদস্যদের মধ্য থেকে একজন
          পলিসি ও ব্র্যান্ডিং এক্সপার্ট হিসাবে আমি ড. মুহম্মদ রিসালাত সিদ্দীক, এসেছি আপনাদের সামনে।
        </p>

        <h2 id="কে">কে এই ড. মুহম্মদ রিসালাত সিদ্দীক?</h2>

        <div className="lg:flex items-center gap-8 mb-6">
          <img
            src="/images/basis/who-is-risalat-siddik.png"
            alt=""
            className="max-h-[450px] object-contain mx-auto mb-6 lg:mb-0"
          />
          <div>
            <p>
              আমি ড. মুহম্মদ রিসালাত সিদ্দীক, দ্যা ম্যান অফ স্টীল (চেয়ারম্যান), অ্যানালাইজেন বাংলাদেশ লিমিটেড। ঢাকা
              ইউনিভার্সিটির আইবিএ থেকে ডিজিটাল ট্রান্সফোর্মেশন বা ডিজিটাল রূপান্তর নিয়ে কাজ করে আমি বিজনেস
              অ্যাডমিনিস্ট্রেশনে আমার ডক্টরেট সম্পন্ন করেছি।
            </p>
            <p className="font-medium">অসুখ বিসুখের ডাক্তার না কিন্তু আবার! তথ্যপ্রযুক্তির ডক্টর।</p>
            <p>
              দেশের প্রথম ডিজিটাল মার্কেটিং কোম্পানি হিসেবে অ্যানালাইজেন বাংলাদেশ লিমিটেডকে আমরা তৈরি করেছি, শিল্পের
              সাথে প্রযুক্তির একটি সৃজনশীল মিশেলে। প্রায় এক দশক ধরে আমরা কাজ করে আসছি ডিজিটাল মার্কেটিং, ই. আর. পি., বিগ
              ডাটা, আর্টিফিসিয়াল ইন্টেলিজেন্স ও মেশিন লার্নিং নিয়ে। আমরা দিয়ে আসছি অ্যাডভার্টাইজিং টেকনোলোজি সল্যুশন,
              মার্কেটিং টেকনোলজি সল্যুশন, চ্যাটবক্স সল্যুশন এর মতো প্রযুক্তিগত সেবা গুলো। আমরা কাজ করেছি এগ্রোটেক নিয়ে
              এবং কিছুদিন আগে মাইক্রোজেন নামে আমরা একটি ফিনটেক সল্যুশন নিয়ে এসেছি যা দিয়ে ব্যাংকিং খাতে ক্ষুদ্রঋণ এর
              কার্যক্রম পরিচালনা আরো সহজতর হবে।
            </p>
          </div>
        </div>

        <p>
          এর আগে, ২০০৭ থেকে ২০১৪ সাল পর্যন্ত আমি কাজ করেছি ইউনিলিভারের মতো একটি বহুজাতিক প্রতিষ্ঠানে বাংলাদেশ ও
          সিঙ্গাপুরে ব্র্যান্ড ডেভেলপমেন্ট ও মার্কেটিং নিয়ে। সেই সাথে, পারিবারিক ভাবে সুত্রপাত করা জনাব, এ. বি. এম.
          সিদ্দীক (আমার বাবা) এর কোম্পানি, ক্রান্তি অ্যাসোসিয়েটস লিমিটেড, ১৯৮৯ সাল থেকে যেটা আছে, সেখানেও আমি পরিচালক
          এবং সিইও হিসেবে কাজ করে আসছি।
        </p>

        <iframe
          width="800"
          height="450"
          className="mx-auto"
          src="https://www.youtube.com/embed/ejz2e-R5XS8?si=cACrykxgEpxL_Q1j"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <h2>আইসিটি খাতে আমাদের কাজের স্বীকৃতি:</h2>
        <p>
          ক্রান্তি অ্যাসোসিয়েট লিমিটেড মাঠ পর্যায়ের কৃষকদের জন্য সয়েল সেইফ সল্যুশন নিয়ে হার্ডওয়্যার-সফটওয়্যারের সমন্বয়ে
          আমরা একটি IOT সিস্টেম দাঁড় করেছি। এই কাজের স্বীকৃতি হিসেবে বাংলাদেশের পক্ষে আমরা ২০১৬ সালে সর্বপ্রথম মেরিট
          অ্যাওয়ার্ড পাই The Asia Pacific ICT Alliance Awards (APICTA) থেকে এবং সেই সাথে স্ট্যান্ডার্ড চার্টাড ব্যাংক
          অ্যাগ্রো অ্যাওয়ার্ড (বেস্ট টেকনোলজি ইন অ্যাগ্রিকালচার) অর্জন করি।
        </p>

        <p>
          অ্যানালাইজেন বাংলাদেশ লিমিটেড থেকে আমরা বিশ্বে ৪ টা দেশে আমাদের প্রেজেন্স তৈরি করেছি এবং সেই লোকেশনগুলো থেকে
          প্রায় ১৪টা দেশে ২০০ এর বেশি ক্লায়েন্টকে সার্ভ করে আসছি। দেশে বিদেশে আমরা পেয়েছি অসংখ্য স্বীকৃতি এবং পুরস্কার।
          এর মধ্যে একটি পুরস্কারের কথা আলাদা করে বলতে চাই, সেটা হল ২০১৯ সালে BASIS National ICT Awards - এ অ্যানালাইজেন
          থেকে ৩টি ক্যাটাগরিতে ৩টি টেকনোলজি প্রোডাক্ট নিয়ে অংশগ্রহণ করে ৩টিতেই চ্যাম্পিয়ন হই। বাংলাদেশে এখন পর্যন্ত এই
          অনন্য রেকর্ড এখনও কেউ ভাঙতে পারেনি।
        </p>

        <div className=" flex flex-wrap gap-8 py-8 max-w-full w-full">
          <img
            src="https://teamsmart.tech/wp-content/uploads/2024/04/SCB_Agrow_Award_51b6890a0b-300x199.webp"
            alt=""
            className="flex-1 object-cover"
          />
          <img
            src="https://teamsmart.tech/wp-content/uploads/2024/04/Untitled-1-01-1-300x232.webp"
            alt=""
            className="flex-1 object-cover"
          />
        </div>

        <h2 id="কর্মপরিধি">বেসিস এ আমার কর্মপরিধি:</h2>
        <p>
          বেসিস-এ অন্তুর্ভূক্ত হবার পর কখনো সদস্য, কখনো কো-চেয়ারম্যান, কখনো চেয়ারম্যান হিসেবে পলিসি অ্যাডভোকেসি নিয়ে
          আমার একটি সমৃদ্ধ অভিজ্ঞতা হয়েছে। বেসিস-এ ডিজিটাল মার্কেটিং স্ট্যান্ডিং কমিটির চেয়ারম্যান হিসেবে ডিজিটাল
          মার্কেটিং এর সংজ্ঞায়ন থেকে শুরু করে, ফুল পলিসি, আইটিইএস হিসেবে এটিকে অন্তর্ভুক্তিকরণ নিয়ে আমি কাজ করেছি। সেই
          সুবাদে ৭.৬৩% ট্যাক্সের একটি সুবিধা আমরা ডিজিটাল মার্কেটিং এর সবাই-ই কিন্তু পেয়েছি।
          <br />
          ডিজিটাল কমার্স কমিটি এর সদস্য হিসেবে ই-কমার্স পলিসি নিয়ে কাজ করার সৌভাগ্য ও আমার হয়েছে, প্রথম যখন ২০১৮ তে এই
          পলিসির কাজটা শুরু হয়। কন্টেন্ট পলিসির সূত্রপাতটাও কিন্তু বেসিস থেকেই। বাইরে বিভিন্ন জায়গায় কন্টেন্ট গিল্ড নিয়ে
          কাজ হয়েছে, আমি সেখানেও ছিলাম। এই তিনটি পলিসি নিয়েই আমি কাজ করেছি।
        </p>
        <img src="/images/basis/basis-working-area.png" className="max-h-[500px] object-contain" />
        <p>
          <br />
          পাশাপাশি, এমআরএ বা মাইক্রোক্রেডিট রেগুলেটরী অথরিটির মাইক্রোফাইন্যান্সের জন্য ফিনটেক পলিসি কেমন হওয়া উচিত এবং
          এগ্রিকালচারাল মিনিস্ট্রির সাথে এগ্রিকালচার টেক বা এগ্রোটেক এর পলিসি গুলো কেমন হবে সেটি নিয়েও আমার একদম সরাসরি
          কাজ করার সৌভাগ্য হয়েছে।
          <br />
          সেই সাথে, বাংলাদেশ কারিগরি শিক্ষা বোর্ড-এর জন্য ন্যাশনাল টেকনিক্যাল অ্যান্ড ভোকেশনাল কোয়ালিফিকেশন ফ্রেমওয়ার্ক
          এর জন্যে ডিজিটাল মার্কেটিং এর কম্পিটেন্সি স্ট্যান্ডার্ড প্রস্তুতকরণে কাজ করেছি এবং আইসিটি ডিভিশন-এর অধীনে
          ডিজিটাল মার্কেটিং সার্টিফিকেশন এসেসমেন্ট পদ্ধতি তৈরী নিয়েও আমার কাজ করা হয়েছে।
          <br />
          এছাড়াও পেশাদার দায়িত্বের পাশাপাশি, আমি আইবিএ-তে ফুল কোর্স ক্লাস নিচ্ছি এবং আইসিটি ডিভিশনের ACMP প্রোগ্রামে
          ডিজিটাল ট্রান্সফরমেশন, সাইবার সিকিউরিটি, এআই ইন্টালিজেন্স, ডিজিটাল মার্কেটিং, ডাটা প্রাইভেসি, বিগ ডাটা এবং
          মার্কেটিং ফানেল নিয়ে নলেজ ক্রিয়েশন ও নলেজ শেয়ারিং নিয়েও কাজ করছি।
        </p>

        <iframe
          width="800"
          height="450"
          className="mx-auto"
          src="https://www.youtube.com/embed/_NcxvidRrnE?si=cACrykxgEpxL_Q1j"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <h2 id="পরিশেষে">পরিশেষেঃ</h2>
        <img src="/images/basis/group-photo.png" className="w-full object-contain max-h-[500px] mb-6" alt="" />
        <p>
          বেসিস এ এখন প্রয়োজন, সকল দলমতের উর্ধ্বে উঠে, সবাইকে সাথে নিয়ে এই সকল নতুন নতুন সেক্টরগুলোর নিজস্ব চাহিদা
          অনুযায়ী নীতি নির্ধারণ করা। এইজন্য আমাদের লাগবে সেই সকল ইন্ডিভিজ্যুয়াল সেক্টর এক্সপার্টদের নেতৃত্বে নিয়ে আসা
          এবং সকলের মতামত ও প্রয়োজনের উপর ভিত্তি করে তাদের এক্সপার্টিজ ব্যবহার করার সুযোগ তৈরি করে দেয়া।
          <br />
          আমরা যদি পুরাতনকে আঁকড়ে ধরে থাকি, আমরা যদি আমাদের ইন্ডাস্ট্রির প্রতিটি সাব-সেক্টরের জন্য আলাদা আলাদা
          এক্সপার্টদের সমন্বয়ে একটি স্ট্যান্ডিং কমিটি তৈরি করে পলিসি অ্যাডভোকেসি না করতে পারি, তাহলে কিন্তু আমাদের আর
          কোনো উপায় থাকবে না। বেসিস এর সাথে আমাদের সকলের স্কিন ইন দ্যা গেম সম্পর্ক। বেসিস এর ভালো-মন্দের উপর জড়িত আমাদের
          আইসিটি খাতের সকলের ভবিষ্যত। সেইজন্য আমার সম্পূর্ন চেষ্টাটাই থাকবে তথ্য প্রযুক্তির এই সাব-সেক্টর বা ক্ষেত্র
          ভিত্তিক পলিসি তৈরি, প্রিসিশন মার্কেটিং এবং এর মাধ্যমে কান্ট্রি ব্র্যান্ডিং নিয়ে কাজ করা। গত ৭-৮ বছরে বেসিসে
          আমি আমার সময় ও শ্রম দিয়ে পলিসি নিয়ে কাজ করেছি এবং সামনে আরো কাজ করার আগ্রহ রাখছি।
          <br />
          উপরোক্ত তিনটি ক্ষেত্রের উন্নতির মাধ্যমে টিম স্মার্ট এর পক্ষ থেকে আমি ড. মুহম্মদ রিসালাত সিদ্দিক ‘মেইড ইন
          বাংলাদেশ’ কে সত্যিকার ভাবে বিশ্ব দরবারে তুলে ধরতে আপনাদের সকলের সুচিন্তিত সমর্থন, সহযোগিতা ও ভোট চাচ্ছি।
          <br />
          এই পথে, নিজ নিজ আলাদা দক্ষতা ও সক্ষমতা নিয়ে আমার সাথে আছেন আমাদের টিম স্মার্ট এর আরো ১০ জন স্বপ্ন- সারথী।
          আগামী ২০২৪-২০২৬ বেসিস নির্বাচনে আমাদের মেধা, শ্রম ও সময় দিয়ে বেসিস কে গড়ে তুলতে চাই দলমত নির্বিশেষে একটি
          স্বচ্ছ ও জবাবদিহিতামূলক অ্যাসোসিয়েশন যা হবে ‘স্মার্ট বাংলাদেশ ভিশন ২০৪১’ এর নিউক্লিয়াস।
          <br />
          <br />
          টিম স্মার্ট - স্মার্ট বেসিস এর পথে, একসাথে।
          <br />
          <br />
          ধন্যবাদ।
        </p>
      </div>
    </div>
  );
}