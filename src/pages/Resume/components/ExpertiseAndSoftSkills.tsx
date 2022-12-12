export default function ExpertiseAndSoftSkills() {
  return (
    <div className="grid grid-cols-2 mb-10">
      <div className="col-span-2 mb-5 md:mb-0 md:col-span-1">
        <h3 className="font-medium">EXPERTISE: </h3>
        <hr className="my-3 w-[100%]" />
        <ul className="pl-5">
          <li>
            <p>Development of Landing Pages;</p>
          </li>
          <li>
            <p>Development of APIs;</p>
          </li>
          <li>
            <p>Development of blog systems, e-commerces and various systems;</p>
          </li>
          <li>
            <p>Webcrawlers and scrappers;</p>
          </li>
        </ul>
      </div>
      <div className="col-span-2 mb-5 md:mb-0 md:col-span-1">
        <h3 className="font-medium">SOFT SKILLS: </h3>
        <hr className="my-3 w-[100%]" />

        <ul className="pl-5">
          <li>
            <p>Attentive Listening & Effective Communication Skills;</p>
          </li>
          <li>
            <p>Teamwork & Self-Awareness;</p>
          </li>
          <li>
            <p>Problem Solving & Creativity;</p>
          </li>
          <li>
            <p>Critical Thinking & Proactivity.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
