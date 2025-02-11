import Button from "../Button";
import Input from "../Input";

function PlatformForm() {
  return (
    <div className="flex flex-col px-14 w-full">
      <form className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Teste..."
          labelContent="Teste"
          descriptionContent="opa..."
        />

        <Button content="Submit" type={"submit"} />
      </form>
    </div>
  );
}

export default PlatformForm;
