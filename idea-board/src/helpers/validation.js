const requiredField = value => (value ? undefined : `You need to fill this in to continue`);

const maxLength = max => value => (value && value.length > max ? `Must be ${max} characters or less` : undefined);

export {
  requiredField,
	maxLength
};
