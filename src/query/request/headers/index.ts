const _headers = new Headers({
	// "Content-Type": "text/xml",
});

// _headers.append("From", ADD_CONTACT_EMAIL from env );
// May not be able to set - it is automatic and unchangeable
// _headers.append("Referer", "datatattat.com"); // should return 'text/xml'

export const getRequestHeaders = () => _headers;
