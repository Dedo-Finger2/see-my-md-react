import Button from "../Button";
import Input from "../Input";

function GitlabForm() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 border-b border-b-neutral-600 pb-6">
        <Input
          type={"password"}
          isRequired={true}
          placeholder="API Key..."
          labelContent="API Key"
          descriptionContent="Your Gitlab API Key"
        />
        <Button content={"Update API Key"} type={"button"} />
      </div>
      <form className="flex flex-col gap-4">
        <Input
          type={"text"}
          placeholder="Username..."
          labelContent="Username"
          descriptionContent="Your Gitlab username"
        />
        <Input
          type={"email"}
          placeholder="Email..."
          labelContent="Email"
          descriptionContent="Your Gitlab email"
        />
        <Input
          type={"text"}
          isRequired={true}
          placeholder="Repository Name..."
          labelContent="Repository Name"
          descriptionContent="Your Gitlab repository name"
        />
        <Input
          isRequired={true}
          type={"text"}
          placeholder="Branch Name..."
          labelContent="Branch Name"
          descriptionContent="Your Gitlab main branch name"
        />
        <Button content={"Submit"} type={"submit"} />
      </form>
    </div>
  );
}

export default GitlabForm;
