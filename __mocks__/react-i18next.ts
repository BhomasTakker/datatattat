type T = (val: string) => string;

type I18MockType = {
	useTranslation: () => {
		t: T;
	};
};

const i18next: I18MockType = jest.createMockFromModule("react-i18next");

const useTranslation = () => ({ t: (key: string) => key });
// useTranslation: () => ({ t: (key: string) => key }),
i18next.useTranslation = useTranslation;

module.exports = i18next;
export {};
