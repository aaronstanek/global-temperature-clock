import { rawData } from './data';

type LinearModelParameters = {
	startTimeUnixMs: number;
	endTimeUnixMs: number;
	startTemperature: number;
	endTemperature: number;
};

type LinearModel = (currentTimeUnixMs: number) => number;

const getUnixMsForYear = (year: number) =>
	Math.trunc((Date.UTC(year, 0) + Date.UTC(year + 1, 0)) / 2);

const getLinearModelParameters = (currentTimeUnixMs: number): LinearModelParameters => {
	let smallIndex = 0;
	let bigIndex = rawData.length - 1;
	while (bigIndex - smallIndex > 1) {
		const middleIndex = Math.trunc((smallIndex + bigIndex) / 2);
		if (currentTimeUnixMs >= getUnixMsForYear(rawData[middleIndex][0])) {
			smallIndex = middleIndex;
		} else {
			bigIndex = middleIndex;
		}
	}
	return {
		startTimeUnixMs: getUnixMsForYear(rawData[smallIndex][0]),
		endTimeUnixMs: getUnixMsForYear(rawData[bigIndex][0]),
		startTemperature: rawData[smallIndex][1],
		endTemperature: rawData[bigIndex][1]
	};
};

const initializeLinearModel = (modelParameters: LinearModelParameters): LinearModel => {
	const degreesPerMs =
		(modelParameters.endTemperature - modelParameters.startTemperature) /
		(modelParameters.endTimeUnixMs - modelParameters.startTimeUnixMs);
	return (currentTimeUnixMs: number) =>
		modelParameters.startTemperature +
		(currentTimeUnixMs - modelParameters.startTimeUnixMs) * degreesPerMs;
};

export const PiecewiseLinearModel = () => {
	let linearModel: { parameters: LinearModelParameters; f: LinearModel } | undefined;
	return (currentTimeUnixMs: number) => {
		if (
			linearModel === undefined ||
			currentTimeUnixMs < linearModel.parameters.startTimeUnixMs ||
			currentTimeUnixMs >= linearModel.parameters.endTimeUnixMs
		) {
			const parameters = getLinearModelParameters(currentTimeUnixMs);
			const f = initializeLinearModel(parameters);
			linearModel = { parameters, f };
		}
		return linearModel.f(currentTimeUnixMs);
	};
};
