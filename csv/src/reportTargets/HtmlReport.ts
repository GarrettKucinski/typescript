import * as fs from 'fs';
import { OutputTarget } from '../Summary';

class HtmlReport {
  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
    `;
    fs.writeFileSync('report.html', html);
  }
}

export default HtmlReport;
