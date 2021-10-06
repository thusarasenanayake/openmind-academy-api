const handleErrors = (status, err, req) => {
  const error = {
    status: status,
    data: [],
  };

  if (err.code === 400) {
    error.data.push({
      code: 400,
      domain: req.originalUrl,
      message: err.message || 'Bad Request',
    });
  }
  if (err.code === 404 || err === 404) {
    error.data.push({
      code: 404,
      domain: req.originalUrl,
      message: 'Not Found',
    });
  }
  if (err.code === 500) {
    error.data.push({
      code: err.code,
      domain: req.originalUrl,
      message: err.message || 'Internal Server Error',
    });
  }
  if (err.code === 11000) {
    error.data.push({
      code: err.code,
      domain: req.originalUrl,
      message: err.message || 'Duplicate ID',
    });
  }
  if (err.code === 121) {
    error.data.push({
      code: 121,
      domain: req.originalUrl,
      message: err.message,
      requiredAs: {
        ID: ' 0 < int < 100000',
        name: 'string',
        address: { city: 'string', line1: 'string', line2: 'string' },
        courseID: '0 < int < 1000',
        phone: '0xx xxxx xxx',
        email: 'name@domain.com',
      },
    });
  }

  return error;
};

module.exports = {
  handleErrors,
};
