import professionalExperience from "../assets/professionalExperience";

interface ProfessionalExperienceType {
  title: string;
  startDate: string;
  finishDate: string;
  type: string;
  attribuitions: Array<string>;
}

function renderProfessionalExperience() {
  function renderAttribuitions(experiences: Array<string>) {
    return experiences.map((experience) => {
      return <li>{experience}</li>;
    });
  }

  return professionalExperience.map(
    (experience: ProfessionalExperienceType) => {
      return (
        <div className="grid grid-cols-8 gap-3 mb-10">
          <div className="col-span-1">
            <p className="text-[16px] mt-2">{experience.startDate}</p>
            <p className="text-[16px] pl-7">⇒</p>
            <p className="text-[16px]">{experience.finishDate}</p>
            <hr className="my-3" />
            <p className="text-[16px]">{experience.type}</p>
          </div>
          <div className="col-span-6">
            <p>
              <strong>{experience.title}</strong>
            </p>
            <ul className="pl-5 mt-3 font-light">
              {renderAttribuitions(experience.attribuitions)}
            </ul>
          </div>
        </div>
      );
    }
  );
}

export default function ProfessionalExperience() {
  return (
    <div>
      <h3 className="font-medium">PROFESSIONAL EXPERIENCE:</h3>
      <hr className="my-3 w-[100%]" />
      <div>{renderProfessionalExperience()}</div>
    </div>
  );
}
