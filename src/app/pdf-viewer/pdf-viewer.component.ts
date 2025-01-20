import { Component } from '@angular/core';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
})
export class PdfViewerComponent {
  samplePDF =
    'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf';
  onPdfLoaded(event: any): void {
    // Access the PDFViewerApplication object
    const PDFViewerApplication = (window as any).PDFViewerApplication;

    if (PDFViewerApplication) {
      console.log('PDF.js core API is available:', PDFViewerApplication);

      // Example: Access the PDF document
      const pdfDocument = PDFViewerApplication.pdfDocument;
      console.log('PDF Document:', pdfDocument);

      // Example: Get the number of pages
      pdfDocument.numPages.then((numPages: number) => {
        console.log('Number of pages:', numPages);
      });

      // Example: Extract text from the first page
      pdfDocument.getPage(1).then((page: any) => {
        page.getTextContent().then((textContent: any) => {
          console.log('Text content of page 1:', textContent);
        });
      });
    } else {
      console.error('PDFViewerApplication is not available');
    }
  }
}
