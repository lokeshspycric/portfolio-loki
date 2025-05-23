export default function Certifications() {
  const certsRow1 = [
    {
      title: "AWS Solutions Architect Associate",
      logo: "/certs/AWS_SA.png",
      link: "https://www.credly.com/badges/20b15022-0617-48ca-9eb5-322e7e2c5e0e",
    },
    {
      title: "AWS Developer Associate",
      logo: "/certs/AWS_Dev.png",
      link: "https://www.credly.com/badges/f912ef95-f77f-45da-821e-95d86da7d281",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      logo: "/certs/AWS_Foun.png",
      link: "https://www.credly.com/badges/3c537fc1-d78c-49ce-ac0c-2a6107d1e215",
    },
  ];

  const certsRow2 = [
    {
      title: "AWS Certified in GenAI",
      logo: "/certs/AWS-GenAI.png",
      link: "https://www.credly.com/badges/c7748d5b-df0d-4ee4-af2b-2f9d082a9502",
    },
    {
      title: "Microsoft Certified: AZ-900",
      logo: "/certs/Azure_Fun.png",
      link: "https://www.credly.com/badges/c8ce448e-d72b-4b3f-8592-9c9c6e0099f4",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 mt-24 pb-20 text-center">
      <h2 className="text-3xl font-bold text-blue-600 dark:text-purple-400 mb-16">Certifications</h2>

      {/* Row 1 */}
      <div className="flex flex-wrap justify-center gap-12 mb-12">
        {certsRow1.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:scale-105 transition-transform"
          >
            <img src={cert.logo} alt={cert.title} className="w-24 h-24 object-contain mb-3" />
            <span className="text-base font-semibold text-gray-900 dark:text-gray-100 text-center">
              {cert.title}
            </span>
          </a>
        ))}
      </div>

      {/* Row 2 - Centered between Row 1 items */}
      <div className="flex justify-center gap-40">
        {certsRow2.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:scale-105 transition-transform"
          >
            <img src={cert.logo} alt={cert.title} className="w-24 h-24 object-contain mb-3" />
            <span className="text-base font-semibold text-gray-900 dark:text-gray-100 text-center">
              {cert.title}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
