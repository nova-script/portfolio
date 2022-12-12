import technicalProficiences from "../assets/technicalProficiences";

interface TechnicalProficience {
  title: string;
  description: string;
}

function renderProficiences() {
  return technicalProficiences.map((proficience: TechnicalProficience) => {
    return (
      <div className="mt-3">
        <p>
          <strong>{proficience.title}</strong>
        </p>
        <p>{proficience.description}</p>
      </div>
    );
  });
}

export default function Proficiences() {
  return (
    <div className="mb-10">
      <div>
        <h3 className="font-medium">TECHNICAL PROFICIENCES:</h3>
        <hr className="my-3 w-[100%]" />
        {renderProficiences()}
      </div>
    </div>
  );
}
