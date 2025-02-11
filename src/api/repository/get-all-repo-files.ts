type Data = {
	apiKey: string;
	username: string;
	repoName: string;
	branchName: string;
};

export type RepoFile = {
	id: string;
	shortName: string;
	path: string;
};

type RepoFolder = {
	id: string;
	path: string;
	content: Array<RepoFile & RepoFolder> | Array<RepoFile> | Array<RepoFolder>
}

async function getAllRepoFiles({
	username,
	repoName,
	branchName,
	apiKey,
}: Data) {
	const projectPath = encodeURIComponent(`${username}/${repoName}`);
	const url = `https://gitlab.com/api/v4/projects/${projectPath}/repository/tree?ref=${branchName}`;
	const response = await fetch(url, {
		headers: { "PRIVATE-TOKEN": apiKey },
	});
	if (!response.ok) {
		console.error(await response.json());
		throw new Error("Falha na requisição");
	}
	const body = await response.json();
	const files: RepoFile[] = [];
	for (const file of body) {
		files.push({
			id: file.id,
			path: file.path,
			shortName: (file.name as string).split(".")[0],
		});
	}

	const noHiddenFiles = files.filter(file => !file.path.startsWith("."))

	for (const folder of noHiddenFiles) {
		const url = `https://gitlab.com/api/v4/projects/${projectPath}/repository/tree?path=${folder.path}&ref=${branchName}`;
		const response = await fetch(url, {
			headers: { "PRIVATE-TOKEN": apiKey },
		});
		if (!response.ok) {
			console.error(await response.json());
			throw new Error("Falha na requisição");
		}
		const body = await response.json();
		for (const file of body) {
			files.push({
				id: file.id,
				shortName: file.name.split(".")[0],
				path: file.path
			})
		}
	}

	const filesOnly = files.filter(file => file.path.endsWith(".md"))

	console.log(filesOnly)

	return filesOnly;
}

export default getAllRepoFiles;
