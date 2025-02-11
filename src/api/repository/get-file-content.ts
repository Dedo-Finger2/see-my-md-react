import { Base64 } from "js-base64";
import { marked } from "marked";
import applyStylesToMarkdownTurnedHtml from "../utils/apply-styles-to-markdown-turned-html";

type Data = {
	apiKey: string;
	username: string;
	repoName: string;
	branchName: string;
	filePath: string;
};

export type RepoFileContent = {
	blobId: string;
	commitId: string;
	content: string;
	size: number;
};

async function getFileContent({
	apiKey,
	branchName,
	repoName,
	username,
	filePath,
}: Data) {
	const projectPath = encodeURIComponent(`${username}/${repoName}`);
	const encodedFilePath = encodeURIComponent(filePath);
	const url = `https://gitlab.com/api/v4/projects/${projectPath}/repository/files/${encodedFilePath}?ref=${branchName}`;
	const response = await fetch(url, {
		headers: { "PRIVATE-TOKEN": apiKey },
	});
	if (!response.ok) {
		console.error(await response.json());
		throw new Error("Falha na requisição");
	}
	const body = await response.json();
	const fileContent: RepoFileContent = {
		blobId: body.blob_id,
		commitId: body.commit_id,
		content: applyStylesToMarkdownTurnedHtml(
			await marked.parse(Base64.decode(body.content))
		),
		size: body.size,
	};
	return fileContent;
}

export default getFileContent;
