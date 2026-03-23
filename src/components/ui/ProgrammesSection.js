import Image from "next/image";
import Link from "next/link";
import EDUCATION from "/public/images/EDUCATION.png";
import HEALTHCARE from "/public/images/HEALTHCARE.png";
import WOMEN_EMPOWERMENT from "/public/images/WOMEN EMPOWERMENT.png";
import ENVIRONMENT from "/public/images/Livelihood.png";
import CLOTH_DONATION from "/public/images/EMPOWERING GRASSROOTS.jpeg";
import ELDERLY from "/public/images/DISASTER RESPONSE.webp";

const programmes = [
  {
    id: "education",
    title: "Child Education",
    description:
      "Education, nutrition and holistic development of underprivileged children",
    icon: EDUCATION,
    textColor: "text-yellow-600",
    bgColor: "bg-yellow-50 hover:bg-yellow-100",
    link: "/ourInitiatives#education",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Taking healthcare services to doorsteps of hard-to-reach communities",
    icon: HEALTHCARE,
    textColor: "text-purple-600",
    bgColor: "bg-purple-50 hover:bg-purple-100",
    link: "/ourInitiatives#healthcare",
  },
  {
    id: "women",
    title: "Women Empowerment",
    description:
      "Empowering adolescent girls & women through community engagement",
    icon: WOMEN_EMPOWERMENT,
    textColor: "text-blue-600",
    bgColor: "bg-blue-50 hover:bg-blue-100",
    link: "/ourInitiatives#women",
  },
  {
    id: "environment",
    title: "Environment & Sustainability",
    description:
      "Tree plantation drives and cleanliness campaigns for a greener future",
    icon: ENVIRONMENT,
    textColor: "text-green-600",
    bgColor: "bg-green-50 hover:bg-green-100",
    link: "/ourInitiatives#environment",
  },
  {
    id: "livelihood",
    title: "Livelihood Support",
    description:
      "Skill training and placement support for underprivileged youth",
    icon: CLOTH_DONATION,
    textColor: "text-orange-600",
    bgColor: "bg-orange-50 hover:bg-orange-100",
    link: "/ourInitiatives#livelihood",
  },
  {
    id: "elderly",
    title: "Elderly Care",
    description:
      "Supporting and caring for elderly individuals in our communities",
    icon: ELDERLY,
    textColor: "text-red-600",
    bgColor: "bg-red-50 hover:bg-red-100",
    link: "/ourInitiatives#elderly",
  },
];

export default function ProgrammesSection() {
  return (
    <div className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Programmes
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Comprehensive initiatives creating lasting impact across communities
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programmes.map((programme) => (
            <Link
              key={programme.id}
              href={programme.link}
              className={`p-6 rounded-xl ${programme.bgColor} transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center gap-4`}
            >
              <div className="flex-shrink-0">
                <Image
                  src={programme.icon}
                  alt={programme.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className={`text-xl font-bold ${programme.textColor} mb-2`}>
                  {programme.title}
                </h3>
                <p className="text-gray-600 text-sm">{programme.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
