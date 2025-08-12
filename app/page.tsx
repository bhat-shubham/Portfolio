// import Image from "next/image";
import Particles from "@/components/ui/particles";
import Link from "next/link"
export default function Home() {
  return (
<div className="min-h-screen w-full">
  <div style={{ width: '100%', height: '100vh'}}>
  <Particles
    particleColors={['#fff0f0', '#3f5cd2']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={false}
    alphaParticles={true}
    disableRotation={false}
  />
  <div className="w-full z-50 lg:px-105 px-5">
     <div className="z-20 font-mono flex flex-col py-10 text-white ">
      <div>
        <h1 className="font-bold text-3xl">Shubham Bhat</h1>
      </div>
      <div className="py-5">Cybersecurity enthusiast with hands-on experience in threat detection, SOC monitoring, and bug bounties. Strong foundation in penetration testing, network forensics, and secure systems development.
        <p className="py-4 font-bold">Pune,India</p>
        <div className="flex gap-5">
          <Link href="/">
          <div className="border p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
          </div>
          </Link>
          <Link href="mailto:bhatsupshubham@gmail.com">
          <div className="border p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
          </div>
          </Link>
          <Link href="tel:+917889549228">
          <div className="border p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
          </div>
          </Link>
          <Link href="https://www.linkedin.com/in/bhatsupshubham/">
          <div className="border p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </div>
          </Link>
          <Link href="https://github.com/bhat-shubham">
          <div className="border p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </div>
          </Link>
        </div>
        <div>
        <h1 className="font-bold text-3xl py-5">About</h1>
        <p>Cybersecurity enthusiast with hands-on experience in threat detection, SOC monitoring, and bug bounties for threat identification. Strong foundation in penetration testing, network forensics, and secure systems development. Passionate about solving real-world security challenges through code and automation.</p>
        </div>
        <div className="flex flex-col gap-3">
        <h1 className="font-bold text-3xl py-3">Projects</h1>
        <div>
          <div className="flex align-middle gap-2 items-center">
          <Link href="https://netnerve.vercel.app/"><h1 className="text-xl font-bold underline">NetNerve</h1></Link>
          {/* <p className="bg-white/10 p-1 rounded-md">Pune,India</p> */}
          </div>
        <p>Developed an AI-powered packet analyzer NetNevere that autonomously identified and mitigated real-time network threats, significantly reducing mean time to detect (MTTD) and improving overall threat response efficiency. Implemented intelligent packet analysis using deep learning to flag anomalies and potential intrusions in PCAP/CAP files, elevating the security framework and accelerating incident response.Automated protocol dissection and threat detection workflows, enabling real-time traffic categorization and reducing manual analysis efforts by over 70%. Integrated a scalable backend using FastAPI and LLaMA 3 to generate contextual summaries of packet behavior, improving interpretability for non-technical stakeholders.</p>
        </div>
        </div>
        <div className="flex flex-col gap-3">
        <h1 className="font-bold text-3xl py-3">Work Experience</h1>
        <div>
          <div className="flex align-middle gap-2 items-center">
          <h1 className="text-xl font-bold">Presidet@CodeX Club</h1>
          <p className="bg-white/10 p-1 rounded-md">Pune,India</p>
          </div>
        <p>Cybersecurity enthusiast with hands-on experience in threat detection, SOC monitoring, and bug bounties for threat identification. Strong foundation in penetration testing, network forensics, and secure systems development. Passionate about solving real-world security challenges through code and automation.</p>
        </div>
        <div>
          <div className="flex align-middle gap-2 items-center">
          <h1 className="text-xl font-bold">Contributor@Girlscript summer of code</h1>
          <p className="bg-white/10 p-1 rounded-md">Remote</p>
          </div>
        <p>Contributed to various open-source projects, demonstrating technical skills. Ranked #841 among 40,000+ Global Coders.</p>
        </div>
        <div>
          <div className="flex align-middle gap-2 items-center">
          <h1 className="text-xl font-bold">IBM SkillsBuild AI/ML Intern@EduNet Foundation</h1>
          <p className="bg-white/10 p-1 rounded-md">Pune,India</p>
          </div>
        <p>Identified potential security threats and automated the identification of suspicious activities. Engineered and deployed machine learning models that increased predictive accuracy by 30%, utilizing Python libraries such as TensorFlow and scikit-learn.</p>
        </div>
        </div>
        <div className="flex flex-col gap-3">
        <h1 className="font-bold text-3xl py-3">Education</h1>
        <div>
          <div className="flex align-middle gap-2 items-center">
          <h1 className="text-xl font-bold">PDEA&apos;s College Of Engineering, Manjari</h1>
          <p className="bg-white/10 p-1 rounded-md">2022-2026</p>
          </div>
        <p>Bachelor&apos;s Of Engineering In Information Technology</p>
        </div>
        <div>
          <div className="flex align-middle gap-2 items-center">
          <h1 className="text-xl font-bold">Kendriya Vidyalaya No.2</h1>
          <p className="bg-white/10 p-1 rounded-md">2018-2024</p>
          </div>
        <p>High School, Minor in Computer Science</p>
        </div>
        </div>
        <div className="flex flex-col gap-3">
        <h1 className="font-bold text-3xl py-2">Skills</h1>
        <div>
          <div className="flex gap-3 flex-wrap">
          <p className="bg-white/10 p-1 rounded-md">Vulnerability Assessment</p>
          <p className="bg-white/10 p-1 rounded-md">Incident Response</p>
          <p className="bg-white/10 p-1 rounded-md">Threat Intelligence</p>
          <p className="bg-white/10 p-1 rounded-md">Log Analysis</p>
          <p className="bg-white/10 p-1 rounded-md">SIEM</p>
          <p className="bg-white/10 p-1 rounded-md">Penetration Testing</p>
          <p className="bg-white/10 p-1 rounded-md">Network Forensics</p>
          <p className="bg-white/10 p-1 rounded-md">Machine Learning</p>
          <p className="bg-white/10 p-1 rounded-md">Python</p>
          <p className="bg-white/10 p-1 rounded-md">FastAPI</p>
          <p className="bg-white/10 p-1 rounded-md">NextJS</p>
          
          </div>        
        </div>
        </div>

        
      </div>
     </div>
     
</div>
</div>
</div>
  );
}

