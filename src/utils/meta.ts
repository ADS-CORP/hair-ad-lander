// Generate the meta title for a page
export function generateMetaTitle(companyName: string, pageName: string): { title: string } {
  const titleSuffix = companyName ? ` | ${companyName}` : '';
  const title = pageName ? `${pageName}${titleSuffix}` : companyName;

  return { title };
}
