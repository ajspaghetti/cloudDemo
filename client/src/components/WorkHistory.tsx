import React, { useState, useEffect } from 'react';

const WorkHistory = () => {
  const [isOpen, setIsOpen] = useState<{ [key: number]: boolean }>({});
  const [visible, setVisible] = useState<{ [key: string]: boolean }>({});
  console.log(isOpen)
  console.log(visible)

  const toggleOpen = (id: number) => {
    setIsOpen(prev => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.job').forEach((elem, index) => {
      elem.id = `job-${index}`;
      observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

  type JobDetail = {
    id: number;
    image: string;
    title: string;
    period: string;
    company: string;
    details: string[];
  };

  const jobDetails: JobDetail[] = [
    {
      id: 0,
      image: `${process.env.PUBLIC_URL}/pillar.png`,
      title: "Senior Information Technology Manager",
      period: "July 2023 to Present",
      company: "Pillar",
      details: [
        "Spearheaded complex on-premises to cloud migration project, single-handedly migrating on-premises servers and file shares into Azure and SharePoint via VMs, blob storage, SharePoint/OneDrive, Cintoo Hybrid, and FortiGate NGFW.",
        "Spearheaded company website maintenance. Owned and managed www.pillarconstruction.com, driving site audit leading to UI and backend improvements. Increased site security while decreasing loading times through debugging, web server upgrades, and refactoring.",
        "Shifted on-premises network domain controller and firewall to modernized SD-WAN cloud-based network via Fortinet to improve the company's network stability, security, and scalability by reducing the need and cost for VPNs by 95%.",
        "Led configuration and implementation of a Microsoft Teams Direct Routing VoIP system, enhancing organizational communication capabilities through careful planning, technical expertise, and seamless integration into existing networks.",
        "Team representative for Salesforce implementation working directly with sales, business development, and company leadership to create custom APEX Classes to enhance the suite.",
        "Configured MDR (Microsoft Defender for Endpoint), XDR (Defender for Identity), SIEM (Microsoft Sentinel), Defender for Cloud, Defender for SQL, Microsoft Defender for 365, FortiGate NGFW, & more to reduce risk.",
        "Implemented in-house IT ticketing system utilizing Genuity, Power Automate, and PowerApps, significantly enhancing issue tracking and resolution efficiency, and streamlining internal communication and workflow management.",
        "Managed business-critical databases, including single-handedly migrating 25+ large-scale database from Windows Server 2012 to PostgreSQL on Azure, resulting in $47k annual reduction in budget allocation after renegotiating contract and maintaining systems in-house.",
        "Demonstrated comprehensive system administration skills, overseeing, and maintaining optimal performance of IT systems, ensuring reliability and efficiency in a dynamic work environment.",
        "Led cost saving digital transformation of technology services, security, and scalability through identifying overhead in budget, leading RFP for net-new vendors, and renegotiating existing contracts."
      ],
    },
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/pnp.png`,
      title: "Manager, Information Technology & Operations",
      period: "December 2020 to July 2023",
      company: "P&P Construction",
      details: [
        "Developed and implemented custom-made project management, payroll, finance, and HRIS software via SharePoint, Azure, AWS, JavaScript/TypeScript, VBA, PowerAutomate, PowerApps, and SQL via SSMS, which saved 30+ man hours per week.",
        "Built performance management trackers and tools in SharePoint that supervisors used to measure the performance of their teams using 9-box methodologies, which empowered leadership to make data-driven decisions with performance calibrations to improve performance and production.",
        "Created dashboards for completion-rates on projects using aforementioned tools which, when exported, would be sent to clients to ensure that client billings were paid in full.",
        "Consulted with outside organizations on tech implementations, rollouts, and change management, which provided increased value to clients."
      ]
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/gartner.png`,
      title: "Senior Customer Success Manager",
      period: "August 2018 to December 2020",
      company: "Gartner",
      details: [
        "Served as a strategic partner to Chief Human Resource Officers (CHROs), Chief Information Officers (CIOs), and leaders in the HR Technology space at Fortune 500 companies to understand their critical initiatives to provide tools, playbooks, and consultative guidance on how to accomplish their goals.",
        "Increased Gartner for HRBP products seats by 800% in product's first year, over $4 million in annual revenue, through assisting the business development team by regularly joining calls with prospective buyers and hosting department-wide training seminars.",
        "Maintained 98% existing client retention, and successfully grew remaining existing accounts by over 10% each quarter through delivering outstanding service and value.",
        "Successfully drove largest renewal ($1m+) for the Gartner for HR Technologies product.",
        "Planned, organized, and hosted recurring live webinars for my clients to discuss Gartner's latest research findings and HRIS data-analytics tools with consistent high attendance.",
        "Appointed lead mentor for the Gartner for HR Leaders and HRBP products.",
        "Collaborated with product and research departments to collect data from client conversations to develop top-of-mind research, tools, guides, and webinars to bolster Gartner's Tech HR products.",
        "Managed cross-departmental trainings at Gartner for existing and new employees for HR Technology products, ranging from services, sales, research, and product teams."
      ]
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/apple.png`,
      title: "Account Manager, SMB & Government",
      period: "November 2015 to August 2018",
      company: "Apple",
      details: [
        "Functioned as lead SME for 250+ midsize-enterprise accounts and government accounts in the Washington D.C region, totaling annual sales over $2,000,000 in hardware, warranties (Apple Joint-Venture, AppleCare+), and MDM software licenses and configuration services (JAMF Pro).",
        "Sold and assisted in the configuration of custom, MDM-ready hardware to clients along with SaaS solutions based on their specific needs.",
        "Reduced clients' annual IT operating costs by an average of 10% and increased retention rates through custom-engineered deployment and security solutions pre-configured to client needs.",
        "Led building sales plans and strategies to grow existing accounts to premier status ($100K in annual spend at a minimum).",
        "Partnered closely with Apple Solutions Engineer to arrange meetings with large clients ($100K+ annual spend) to improve service and client retention.",
        "Supervised a team of three Business Development Representatives, conducting quarterly performance reviews, creating development and sales goals, and working with them to generate new sales and grow new accounts to be handed off to me once accounts reached $25K of spend.",
        "Lead mentor and trainer to mid-Atlantic business sales teams, hosted in-person training sessions around best practices and company KPIs for existing and new employees."
      ]
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center mx-auto w-full lg:w-3/4 bg-gray-100 p-5 rounded-lg shadow-xl">
      <div className="text-left space-y-10 font-sans">
        {/* Summary Section */}
        <section className="bg-white p-5 rounded-lg shadow-md transition duration-500 ease-in-out">
          <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl mb-5 text-gray-800'>Summary</h2>
          <p className="text-gray-600">
            Senior IT Professional and certified full-stack Software Engineer with 8+ years of diverse IT experience, encompassing sales, support, consulting, cloud, and management. Proficient in multiple programming languages, with extensive expertise in Azure, Linux, and Salesforce development and implementation. Demonstrated leadership in IT management and project management roles, excelling in collaborative environments to achieve successful outcomes with colleagues and clients.
          </p>
        </section>

        {/* Professional Experience Section */}
        <section className="bg-white p-5 rounded-lg shadow-md transition duration-500 ease-in-out">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-800">Professional Experience</h2>
        </section>


        {jobDetails.map((job, index) => (
  <div key={job.id} className={`job mb-5 transition-transform duration-700 ${visible[`job-${index}`] ? 'translate-y-0' : 'translate-y-10 opacity-0'}`}>
    <section className="bg-white p-5 rounded-lg shadow-md transition duration-500 ease-in-out relative">
      <div className="flex flex-col lg:flex-row lg:items-start">

        {/* Left side content: Job Title, Period, Company */}
        <div className="flex-1">
          <h3 className="font-bold text-0.75xl md:text-1xl lg:text-2xl mb-2">{job.title}</h3>
          <p className="text-gray-600 mb-4">{job.company}</p>
          <p className="text-xs text-gray-600">{job.period}</p>
        </div>

        {/* Right side content: Image */}
        <div className="flex justify-end">
        <img src={job.image} alt={`${job.company} logo`} style={{ width: '80px', height: 'auto' }} />
        </div>

      </div>

      {/* Collapsible details */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen[job.id] ? 'max-h-108' : 'max-h-0'}`}>
        <ul className="list-disc ml-5 mt-2 mb-10">
          {job.details.map((detail, detailIndex) => (
            <li key={detailIndex} className="text-gray-600">{detail}</li>
          ))}
        </ul>
      </div>

      {/* Show/Hide Details Button */}
      <button
        className="absolute bottom-0 right-0 mb-4 mr-4 text-gray-500 text-sm font-medium"
        onClick={() => toggleOpen(job.id)}
      >
        {isOpen[job.id] ? 'Hide Details' : 'Show Details'}
      </button>

    </section>
  </div>
))}



        {/* Achievements and References Sections */}
        {/* ... */}
      </div>
    </div>
  );
}

export default WorkHistory;





// export default WorkHistory;





// import React from 'react';

// const WorkHistory = () => {
//   return (
//     <div className="flex justify-start mx-auto w-full lg:w-1/2">
//       <div className="text-left">
//         <section className="mb-10">
//           <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl mb-5'>Summary</h2>
//           <p>
//             Senior IT Professional and certified full-stack Software Engineer with 7+ years of diverse IT experience, encompassing sales, support, consulting, and management. Proficient in multiple programming languages, with extensive expertise in Azure, Linux, and Salesforce development and implementation. Demonstrated leadership in IT management and project management roles, excelling in collaborative environments to achieve successful outcomes with colleagues and clients.
//           </p>
//         </section>

//         <section className="mb-5">
//           <h2 className="text-left font-bold text-2xl md:text-3xl lg:text-4xl mb-5">Professional Experience</h2>

//           {/* IT Manager */}
//           <div className="job mb-5">
//             <h3 className="text-left font-bold text-0.25xl md:text-0.5xl lg:text-1xl mb-2.5">Senior IT Manager, Digital Transformation</h3>
//             <p className="text-left">July 2023 - Present</p>
//             <p className="text-left">Pillar Construction, Alexandria VA</p>
//             <ul className="list-disc ml-5">
//               <li>Spearheaded a complex on-premises to cloud migration project, single-handedly migrating our on-premises servers and file shares into Azure and SharePoint via VMs, blob storage, SharePoint/OneDrive, Cintoo for CAD models, & more.</li>
//               <li>Maintained and updated the www.pillarconstruction.com website, improving UI and backend.</li>
//               <li>Shifted the on-premises network domain controller and firewall to modernized SD-WAN cloud-based network via Fortinet to improve the company’s network stability, security, and scalability by reducing the need and cost for VPNs by 95%.</li>
//               <li>Led the configuration and implementation of a Microsoft Teams Direct Routing VoIP system, enhancing organizational communication capabilities through careful planning, technical expertise, and seamless integration into existing networks.</li>
//               <li>Rolled out a comprehensive cybersecurity system, significantly bolstering the organization's cybersecurity posture through strategic planning and technical proficiency. Configured MDR (Microsoft Defender for Endpoint), XDR (Defender for Identity), SIEM (Sentinel), Defender for Cloud, Defender for SQL, Microsoft Defender for 365, Microsoft Defender TI, FortiGate NGFW, & more to reduce risk. Previously there was only a SonicWall firewall and Cisco Umbrella protection.</li>
//               <li>Innovatively implemented an in-house IT ticketing system utilizing Genuity, Power Automate, and PowerApps, significantly enhancing issue tracking and resolution efficiency, and streamlining internal communication and workflow management.</li>
//               <li>Managed business-critical databases, including single-handedly migrating 25+ large-scale database from Windows Server 2012 to Azure, preventing the need to pay an MSP and the vendor over $35,000/year.</li>
//               <li>Demonstrated comprehensive system administration skills, overseeing and maintaining optimal performance of IT systems, ensuring reliability and efficiency in a dynamic work environment.</li>
//               <li>Improved the technology services, security, and scalability for the company while only raising the technology budget by 10% by finding ways to cut costs, switch vendors, and renegotiate existing contracts.</li>
//             </ul>
//           </div>

//           {/* Manager, IT & Operations */}
//           <div className="job mb-5">
//             <h3 className="text-left font-bold text-0.25xl md:text-0.5xl lg:text-1xl mb-2.5">Manager, IT & Operations</h3>
//             <p className="text-left">December 2020 - July 2023</p>
//             <p className="text-left">P&P Construction, Fairfax VA</p>
//             <ul className='list-disc ml-5'>
//               <li>Developed and implemented custom-made project management, payroll, finance, and HRIS software via SharePoint, Azure, JavaScript/TypeScript, VBA, PowerAutomate, PowerApps, and SQL via SSMS. This automated most administrative tasks and saved management over 10 hours each week in their administrative duties.</li>
//               <li>Built performance management trackers and tools in SharePoint that supervisors used to measure the performance of their teams using 9-box methodologies, which empowered leadership to make data-driven decisions with performance calibrations to improve performance and production.</li>
//               <li>Created dashboards for completion-rates on projects which, when exported, would be sent to clients to ensure that client billings were paid in full. This improved cashflow amount and stability.</li>
//             </ul>
//           </div>

//           {/* Senior Client Success Manager */}
//           <div className="job mb-5">
//           <h3 className="text-left font-bold text-0.25xl md:text-0.5xl lg:text-1xl mb-2.5">Senior Customer Success Manager</h3>
//             <p className="text-left">August 2018 - December 2020</p>
//             <p className="text-left">Gartner, Arlington VA</p>
//             <ul className="list-disc ml-5">
//               <li>Served as a strategic partner to CHROs and leaders in the HR Technology space at Fortune 500 companies to understand their critical initiatives to provide tools, playbooks, and consultative guidance on how to accomplish their goals.</li>
//               <li>Helped grow Gartner for HRBP products from zero seats to over 800 seats ($4,000,000 in revenue) in the span of one year by assisting the business development team by regularly joining calls with prospective buyers.</li>
//               <li>Received “Exceeds expectations” on each of my performance reviews, which calculated most of its weight by measuring client-retention and existing account growth rates.</li>
//               <li>Hosted recurring live webinars for my clients discussing Gartner’s latest research with attendance frequently being over 100 people.</li>
//               <li>Appointed lead mentor for the Gartner for HR Leaders and HRBP products.</li>
//               <li>Collaborated with product and research departments to collect data from client conversations to develop top-of-mind research, tools, guides, and webinars to bolster Gartner’s HR products.</li>
//               <li>Managed cross-departmental trainings at Gartner for existing and new employees for HR Technology products, ranging from services, sales, research, and product teams.</li>
//               <li>Was nominated for and completed the Gartner Future Leaders certification program.</li>
//             </ul>
//           </div>

//           {/* Account Manager */}
//           <div className="job mb-5">
//           <h3 className="text-left font-bold text-0.25xl md:text-0.5xl lg:text-1xl mb-2.5">Account Manager</h3>
//             <p className="text-left">November 2015 - August 2018</p>
//             <p className="text-left">Apple, Washington D.C.</p>
//             <ul className="list-disc ml-5">
//               <li>Sold and assisted in the configuration of custom, MDM-ready hardware to clients along with SaaS solutions based on their specific needs.</li>
//               <li>Managed over 250 midsize enterprise accounts and select government accounts in the Washington D.C region, totaling annual sales over $2,000,000 in hardware, warranties (Apple Joint-Venture, AppleCare+), and MDM software licenses and configuration services (JAMF Pro).</li>
//               <li>Saved organizations thousands in IT operating costs through custom-engineered deployment and security solutions preconfigured exactly to the clients' needs.</li>
//               <li>Collaborated with Apple Solutions Architects to arrange meetings with large clients ($100,000+ annual spend) to improve service and client retention.</li>
//               <li>Built sales plans and strategies to grow existing accounts to successfully hand them off to Account Executives once their annual spend was over $100,000 for two consecutive years.</li>
//               <li>Supervised a team of three Business Development Representatives, conducting quarterly performance reviews, creating development and training plans and materials, and working with them to generate new sales and grow new accounts.</li>
//               <li>Was a lead-mentor and trainer to the mid-Atlantic business sales teams, hosted in-person training sessions for existing and new hires.</li>
//             </ul>
//           </div>

//           {/* Achievements */}
//           <section className="achievements mb-5">
//             <h2 className="text-left font-bold text-0.25xl md:text-0.5xl lg:text-1xl mb-2.5">Achievements</h2>
//             <ul className="list-disc ml-5">
//               <li>Future Leaders Program - Gartner, March 2020 – August 2020</li>
//               <li>Interpretation Workshop - MCS Language Services at the World Bank, June 2012 – August 2012</li>
//             </ul>
//           </section>

//           {/* References */}
//           <section className="references mb-5">
//             <h2 className="text-left">References</h2>
//             <ul className="list-disc ml-5">
//               <li>Jason Kincaid - Head of Technology at Pillar Construction - jasonmichaelkincaid@gmail.com - +1 (202) 577-3133</li>
//               <li>Sebastian Lecha - PhD Candidate, Nuclear Engineering at the University of Michigan - sjlecha@gmail.com - +1 (443) 486-8222</li>
//               <li>Don McQueen - Senior Solutions Architect at Wiz - don@cloudlinuxsql.com - +1 (703) 380-7488</li>
//               <li>Greg Krajci - VP of Research at CEATI - greg.krajci@ceati - +1 (631) 764-4586</li>
//             </ul>
//           </section>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default WorkHistory;
