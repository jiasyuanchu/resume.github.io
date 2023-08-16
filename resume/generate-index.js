const fs = require('fs');

const indexContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Your Website</title>
</head>
<body>
    <!-- Add your content here -->
    <script>
        // Optional JavaScript code
    </script>
    <iframe src="main.hbs"></iframe>
</body>
</html>
`

fs.writeFileSync('docs/index.html', indexContent, 'utf8')