const temLocalhost = window.location.href.includes('localhost')

const URL = temLocalhost ? 'http://localhost:8080' : '';

export default URL;