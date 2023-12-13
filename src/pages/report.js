document.getElementById('downloadButton').addEventListener('click', function () {
    // Replace 'your-pdf-file.pdf' with the actual path to your PDF file
    var pdfUrl = 'FinalReport.pdf';

    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'downloaded-file.pdf'; // Change the name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});