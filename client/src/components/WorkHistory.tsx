import React from 'react';
import './WorkHistory.css';

const WorkHistory = () => {
  return (
    <div className="work-history-container">
      <section className="work-summary">
        <h2>Summary</h2>
        <p>
          Senior IT Professional and certified full-stack Software Engineer with 7+ years of diverse IT experience, encompassing sales, support, consulting, and management. Proficient in multiple programming languages, with extensive expertise in Azure, Linux, and Salesforce development and implementation. Demonstrated leadership in IT management and project management roles, excelling in collaborative environments to achieve successful outcomes with colleagues and clients.
        </p>
      </section>

      <section className="professional-experience">
        <h2>Professional Experience</h2>

        {/* IT Manager */}
        <div className="job">
          <h3>IT Manager, Digital Transformation</h3>
          <p>July 2023 - Present</p>
          <p>Pillar Construction, Alexandria VA</p>
          <ul>
            <li>Spearheaded a complex on-premises to cloud migration project, single-handedly migrating our on-premises servers and file shares into Azure and SharePoint via VMs, blob storage, SharePoint/OneDrive, Cintoo for CAD models, & more.</li>
            <li>Maintained and updated the www.pillarconstruction.com website, improving UI and backend.</li>
            <li>Shifted the on-premises network domain controller and firewall to modernized SD-WAN cloud-based network via Fortinet to improve the company’s network stability, security, and scalability by reducing the need and cost for VPNs by 95%.</li>
            <li>Led the configuration and implementation of a Microsoft Teams Direct Routing VoIP system, enhancing organizational communication capabilities through careful planning, technical expertise, and seamless integration into existing networks.</li>
            <li>Rolled out a comprehensive cybersecurity system, significantly bolstering the organization's cybersecurity posture through strategic planning and technical proficiency. Configured MDR (Microsoft Defender for Endpoint), XDR (Defender for Identity), SIEM (Sentinel), Defender for Cloud, Defender for SQL, Microsoft Defender for 365, Microsoft Defender TI, FortiGate NGFW, & more to reduce risk. Previously there was only a SonicWall firewall and Cisco Umbrella protection.</li>
            <li>Innovatively implemented an in-house IT ticketing system utilizing Genuity, Power Automate, and PowerApps, significantly enhancing issue tracking and resolution efficiency, and streamlining internal communication and workflow management.</li>
            <li>Managed business-critical databases, including single-handedly migrating 25+ large-scale database from Windows Server 2012 to Azure, preventing the need to pay an MSP and the vendor over $35,000/year.</li>
            <li>Demonstrated comprehensive system administration skills, overseeing and maintaining optimal performance of IT systems, ensuring reliability and efficiency in a dynamic work environment.</li>
            <li>Improved the technology services, security, and scalability for the company while only raising the technology budget by 10% by finding ways to cut costs, switch vendors, and renegotiate existing contracts.</li>
          </ul>
        </div>

        {/* Manager, IT & Operations */}
        <div className="job">
          <h3>Manager, IT & Operations</h3>
          <p>December 2020 – September 2022</p>
          <p>P&P Construction, Fairfax VA</p>
          <ul>
            <li>Developed and implemented custom-made project management, payroll, finance, and HRIS software via SharePoint, Azure, JavaScript/TypeScript, VBA, PowerAutomate, PowerApps, and SQL via SSMS. This automated most administrative tasks and saved management over 10 hours each week in their administrative duties.</li>
            <li>Built performance management trackers and tools in SharePoint that supervisors used to measure the performance of their teams using 9-box methodologies, which empowered leadership to make data-driven decisions with performance calibrations to improve performance and production.</li>
            <li>Created dashboards for completion-rates on projects which, when exported, would be sent to clients to ensure that client billings were paid in full. This improved cashflow amount and stability.</li>
          </ul>
        </div>

        {/* Senior Client Success Manager */}
        <div className="job">
          <h3>Senior Client Success Manager, HR Technologies</h3>
          <p>August 2018 – December 2020</p>
          <p>Gartner, Arlington VA</p>
          <ul>
            <li>Served as a strategic partner to CHROs and leaders in the HR Technology space at Fortune 500 companies to understand their critical initiatives to provide tools, playbooks, and consultative guidance on how to accomplish their goals.</li>
            <li>Helped grow Gartner for HRBP products from zero seats to over 800 seats ($4,000,000 in revenue) in the span of one year by assisting the business development team by regularly joining calls with prospective buyers.</li>
            <li>Received “Exceeds expectations” on each of my performance reviews, which calculated most of its weight by measuring client-retention and existing account growth rates.</li>
            <li>Hosted recurring live webinars for my clients discussing Gartner’s latest research with attendance frequently being over 100 people.</li>
            <li>Appointed lead mentor for the Gartner for HR Leaders and HRBP products.</li>
            <li>Collaborated with product and research departments to collect data from client conversations to develop top-of-mind research, tools, guides, and webinars to bolster Gartner’s HR products.</li>
            <li>Managed cross-departmental trainings at Gartner for existing and new employees for HR Technology products, ranging from services, sales, research, and product teams.</li>
            <li>Was nominated for and completed the Gartner Future Leaders certification program.</li>
          </ul>
        </div>

        {/* Account Manager */}
        <div className="job">
          <h3>Account Manager, SMB & Government</h3>
          <p>November 2015 – August 2018</p>
          <p>Apple, Washington D.C.</p>
          <ul>
            <li>Sold and assisted in the configuration of custom, MDM-ready hardware to clients along with SaaS solutions based on their specific needs.</li>
            <li>Managed over 250 midsize enterprise accounts and select government accounts in the Washington D.C region, totaling annual sales over $2,000,000 in hardware, warranties (Apple Joint-Venture, AppleCare+), and MDM software licenses and configuration services (JAMF Pro).</li>
            <li>Saved organizations thousands in IT operating costs through custom-engineered deployment and security solutions preconfigured exactly to the clients' needs.</li>
            <li>Collaborated with Apple Solutions Architects to arrange meetings with large clients ($100,000+ annual spend) to improve service and client retention.</li>
            <li>Built sales plans and strategies to grow existing accounts to successfully hand them off to Account Executives once their annual spend was over $100,000 for two consecutive years.</li>
            <li>Supervised a team of three Business Development Representatives, conducting quarterly performance reviews, creating development and training plans and materials, and working with them to generate new sales and grow new accounts.</li>
            <li>Was a lead-mentor and trainer to the mid-Atlantic business sales teams, hosted in-person training sessions for existing and new hires.</li>
          </ul>
        </div>

        {/* Achievements */}
        <section className="achievements">
          <h2>Achievements</h2>
          <ul>
            <li>Future Leaders Program - Gartner, March 2020 – August 2020</li>
            <li>Interpretation Workshop - MCS Language Services at the World Bank, June 2012 – August 2012</li>
          </ul>
        </section>

        {/* References */}
        <section className="references">
          <h2>References</h2>
          <ul>
            <li>Jason Kincaid - Head of Technology at Pillar Construction - jasonmichaelkincaid@gmail.com - +1 (202) 577-3133</li>
            <li>Sebastian Lecha - PhD Candidate, Nuclear Engineering at the University of Michigan - sjlecha@gmail.com - +1 (443) 486-8222</li>
            <li>Don McQueen - Senior Solutions Architect at Wiz - don@cloudlinuxsql.com - +1 (703) 380-7488</li>
            <li>Greg Krajci - VP of Research at CEATI - greg.krajci@ceati - +1 (631) 764-4586</li>
          </ul>
        </section>
      </section>
    </div>
  );
}

export default WorkHistory;
