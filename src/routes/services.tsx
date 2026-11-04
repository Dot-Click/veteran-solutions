import { useSuspenseQuery } from '@tanstack/react-query';
import { CmsProvider, useCmsValues, cmsBackgroundCss } from '@/lib/cms';
import { publicSiteQuery, PublicServicesProvider, usePublicServices, getServiceMeta, type ServiceGroup } from '@/lib/public-site';
import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import repairCSS from "../styles/import-repairs.css?raw";
import innerRepairCSS from "../styles/inner-page-repairs.css?raw";
import capturedCSS from "../styles/pages/services.css?raw";
import { ImportedPageMenu } from "../components/imported-page-controls";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Our Services | Veteran Solutions & Services" }, { name: 'description', content: "Services — Veteran Solutions and Services, veteran-owned property care." }, { property: 'og:title', content: "Our Services | Veteran Solutions & Services" }, { property: 'og:description', content: "Services — Veteran Solutions and Services, veteran-owned property care." }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
  staticData: { importedDocument: { html: { "className": "has-smooth-scroll lenis", "lang": "en" }, body: {  } } },
  loader: ({ context }) => context.queryClient.ensureQueryData(publicSiteQuery),
  component: CmsIndex,
});

function Index() {
  const cms = useCmsValues("page:services");
  return (
    <>
      <style>{cmsBackgroundCss(capturedCSS, '/site-assets/0fbef83303bf4070.webp', cms('intro-background', '/site-assets/0fbef83303bf4070.webp')) + repairCSS + innerRepairCSS}</style>
      <div className={"site-theme theme-services"}>
        <a className={"skip-link"} href={cms("f0001", "#main")}>{cms("f0002", "Skip to content")}</a>
        <div className={"utility-bar"}>
          <div className={"\x63ontainer utility-inner"}>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-shield-check"} aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg> {cms("f0003", " Proudly veteran owned & operated")}</span>
            <span className={"utility-right"}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-clock3 lucide-clock-3"} aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6h4" /></svg> {cms("f0004", " Available 24/7 ")}<i />{" "}<a href={cms("f0005", "tel:+18573455076")}>{cms("f0006", "(857) 345-5076")}</a></span>
          </div>
        </div>
        <header className={"site-header"}>
          <div className={"\x63ontainer header-inner"}>
            <a aria-label={cms("f0007", "Veteran Solutions and Services home")} className={"brand"} href="/">
              <img src={cms("f0008", "/site-assets/f0a3c5858a327278.webp")} width="80" height="44" alt={cms("f0009", "Veteran eagle and property emblem")} />
              <span>
                <b>{cms("f0010", "VETERAN")}</b>
                <small>{cms("f0011", "SOLUTIONS & SERVICES LLC")}</small>
              </span>
            </a>
            <nav className={"desktop-nav"} aria-label={cms("f0012", "Main navigation")}>
              <a className={""} href="/">{cms("f0013", "Home")}</a>
              <a className={""} href={cms("f0014", "/about")}>{cms("f0015", "About Us")}</a>
              <a className={"active"} href={cms("f0016", "/services")}>{cms("f0017", "Services")}</a>
              <a className={""} href={cms("f0018", "/contact")}>{cms("f0019", "Contact Us")}</a>
              <a className={""} href={cms("f0020", "/legal")}>{cms("f0021", "Legal Pages")}</a>
            </nav>
            <a className={"button button-dark header-quote"} href={cms("f0022", "/contact")}>{cms("f0023", "Start a project")}</a>
            <ImportedPageMenu />
          </div>
        </header>
        <main id="main">
          <section className={"page-intro interior-services-hero"}>
            <div className={"\x63ontainer"}>
              <div className={"breadcrumb"}>
                <a href="/">{cms("f0024", "Home")}</a>
                <span>/</span>
                <span>{cms("f0025", "Our services")}</span>
              </div>
              <div className={"interior-services-hero-grid"}>
                <div>
                  <span className={"eyebrow"}><span className={"label-line"} />{cms("f0026", "WHAT WE DO / 01—09")}</span>
                  <h1>{cms("f0027", "One team for")}<br /><em>{cms("f0028", "every next step.")}</em></h1>
                </div>
                <div className={"interior-services-hero-aside"}>
                  <span className={"interior-hero-number"}>{cms("f0029", "09")}</span>
                  <p>{cms("f0030", "Whether you are clearing a space, caring for a property or planning an upgrade, start with the service that fits your needs.")}</p>
                  <a className={"button button-dark"} href={cms("f0031", "#service-directory")}>{cms("f0032", "Explore our services")}</a>
                </div>
              </div>
              <div className={"interior-hero-foot"}>
                <span>{cms("f0033", "VETERAN OWNED & OPERATED")}</span>
                <span>{cms("f0034", "PROPERTY CARE WITH PURPOSE")}</span>
                <span>{cms("f0035", "AVAILABLE 24/7")}</span>
              </div>
            </div>
          </section>
          <ImportedSectionFindTheRightplaceTo />
          <section className={"process-section section"}>
            <div className={"\x63ontainer"}>
              <div className={"section-heading reveal-ready revealed"}>
                <div>
                  <span className={"eyebrow"}><span className={"label-line"} />{cms("f0036", "A SIMPLE WAY FORWARD")}</span>
                  <h2>{cms("f0037", "Good service starts")}<br />{cms("f0038", "with ")}<em>{cms("f0039", "a conversation.")}</em></h2>
                </div>
                <p>{cms("f0040", "From your first request to the agreed work, we keep the next step clear.")}</p>
              </div>
              <div className={"process-grid"}>
                <div className={"process-item reveal-ready revealed"}>
                  <span>{cms("f0041", "01")}</span>
                  <h3>{cms("f0042", "Tell us what you need")}</h3>
                  <p>{cms("f0043", "Choose a service and share a few details about your property and project.")}</p>
                </div>
                <div className={"process-item reveal-ready revealed"}>
                  <span>{cms("f0044", "02")}</span>
                  <h3>{cms("f0045", "Make a clear plan")}</h3>
                  <p>{cms("f0046", "We review the scope, discuss the estimate and agree a suitable schedule.")}</p>
                </div>
                <div className={"process-item reveal-ready revealed"}>
                  <span>{cms("f0047", "03")}</span>
                  <h3>{cms("f0048", "Put your plans in motion")}</h3>
                  <p>{cms("f0049", "With the details agreed, we get to work on the service your property needs.")}</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <ImportedFooterYourNeedsOurMission />
      </div>
    </>
  );
}

function ImportedSectionFindTheRightplaceTo() {
  const cms = useCmsValues("page:services");
  const services = usePublicServices();
  const byGroup: Record<ServiceGroup, typeof services> = { "clear-clean": [], "refresh-renew": [], "clear-prepare": [] };
  for (const service of services) byGroup[getServiceMeta(service.slug).group].push(service);
  const numberOf = (service: (typeof services)[number]) => String(services.indexOf(service) + 1).padStart(2, "0");
  const serviceCard = (service: (typeof services)[number]) => {
    const meta = getServiceMeta(service.slug);
    return (
      <article className={"service-card reveal-ready revealed"} style={{ "--service-color": "#a6111d", "--service-tint": meta.tint } as CSSProperties} key={service.slug}>
        <a aria-label={`Explore ${service.title}`} className={"service-image"} href={`/services/${service.slug}`}>
          <img src={service.image_url} alt={service.image_alt} style={{ objectPosition: "center center" } as CSSProperties} loading="lazy" />
          <span className={"service-number"}>{numberOf(service)}</span>
          <span className={"image-category"}>{meta.category}</span>
        </a>
        <div className={"service-copy"}>
          <a href={`/services/${service.slug}`}>
            <h3>{service.title}</h3>
          </a>
          <p>{service.description}</p>
          <a className={"underlined-link"} href={`/services/${service.slug}`}>Explore service</a>
        </div>
      </article>
    );
  };
  return (
    <section className={"service-directory section"} id="service-directory">
      <div className={"\x63ontainer"}>
        <div className={"service-directory-top reveal-ready revealed"}>
          <div>
            <span className={"eyebrow"}><span className={"label-line"} />{cms("f0050", "THE FULL LINEUP")}</span>
            <h2>{cms("f0051", "Find the right")}<br /><em>{cms("f0052", "place to start.")}</em></h2>
          </div>
          <nav aria-label={cms("f0053", "Service categories")} className={"service-category-nav"}>
            <a href={cms("f0054", "#clear-clean")}><span>{cms("f0055", "01")}</span>{cms("f0056", "CLEAR & CLEAN")}</a>
            <a href={cms("f0057", "#refresh-renew")}><span>{cms("f0058", "02")}</span>{cms("f0059", "REFRESH & RENEW")}</a>
            <a href={cms("f0060", "#clear-prepare")}><span>{cms("f0061", "03")}</span>{cms("f0062", "CLEAR & PREPARE")}</a>
          </nav>
        </div>
        <div className={"service-group service-group-clear-clean"} id="clear-clean">
          <div className={"service-group-heading reveal-ready revealed"}>
            <span className={"service-group-index"}>{cms("f0063", "01 / 03")}</span>
            <div>
              <span>{cms("f0064", "CLEAR & CLEAN")}</span>
              <h2>{cms("f0065", "A fresh start for your space.")}</h2>
              <p>{cms("f0066", "From removing what no longer belongs to caring for the places you use every day.")}</p>
            </div>
          </div>
          <div className={"service-group-grid"}>
            {byGroup["clear-clean"].map(serviceCard)}
          </div>
        </div>
        <div className={"service-group service-group-refresh-renew"} id="refresh-renew">
          <div className={"service-group-heading reveal-ready revealed"}>
            <span className={"service-group-index"}>{cms("f0111", "02 / 03")}</span>
            <div>
              <span>{cms("f0112", "REFRESH & RENEW")}</span>
              <h2>{cms("f0113", "Make the most of what is there.")}</h2>
              <p>{cms("f0114", "Practical upgrades and carefully considered finishes for the next chapter of your property.")}</p>
            </div>
          </div>
          <div className={"service-group-grid"}>
            {byGroup["refresh-renew"].map(serviceCard)}
          </div>
        </div>
        <div className={"service-group service-group-clear-prepare"} id="clear-prepare">
          <div className={"service-group-heading reveal-ready revealed"}>
            <span className={"service-group-index"}>{cms("f0159", "03 / 03")}</span>
            <div>
              <span>{cms("f0160", "CLEAR & PREPARE")}</span>
              <h2>{cms("f0161", "Make way for what comes next.")}</h2>
              <p>{cms("f0162", "A defined demolition scope can create the right starting point for the work ahead.")}</p>
            </div>
          </div>
          <div className={"service-group-grid"}>
            {byGroup["clear-prepare"].map(serviceCard)}
          </div>
        </div>
        <div className={"directory-outro reveal-ready revealed"}>
          <div>
            <span>{cms("f0174", "NOT SURE WHICH SERVICE FITS?")}</span>
            <p>{cms("f0175", "Tell us about the property and what you want to accomplish. We can discuss the right starting point.")}</p>
          </div>
          <a className={"button button-dark"} href={cms("f0176", "/contact")}>{cms("f0177", "Start a conversation")}</a>
        </div>
      </div>
    </section>
  );
}

function ImportedFooterYourNeedsOurMission() {
  const cms = useCmsValues("page:services");
  return (
    <footer className={"site-footer"}>
      <div className={"\x63ontainer"}>
        <div className={"footer-top"}>
          <div className={"footer-brand"}>
            <span className={"eyebrow light"}>{cms("f0178", "VETERAN SOLUTIONS & SERVICES LLC")}</span>
            <h2>{cms("f0179", "Your needs.")}<br /><em>{cms("f0180", "Our mission.")}</em></h2>
            <p>{cms("f0181", "Property care with purpose.")}<br />{cms("f0182", "One team. Nine ways to make a difference.")}</p>
            <a className={"footer-phone"} href={cms("f0183", "tel:+18573455076")}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-phone"} aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>{cms("f0184", "(857) 345-5076")}</a>
            <span className={"footer-hours"}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"lucide lucide-clock3 lucide-clock-3"} aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6h4" /></svg> {cms("f0185", " Available 24/7")}</span>
          </div>
          <div className={"footer-links"}>
            <h3>{cms("f0186", "Explore")}</h3>
            <a href="/">{cms("f0187", "Home")}</a>
            <a href={cms("f0188", "/about")}>{cms("f0189", "About Us")}</a>
            <a href={cms("f0190", "/services")}>{cms("f0191", "Services")}</a>
            <a href={cms("f0192", "/contact")}>{cms("f0193", "Contact Us")}</a>
            <a href={cms("f0194", "/legal")}>{cms("f0195", "Legal Pages")}</a>
          </div>
          <div className={"footer-links footer-services"}>
            <h3>{cms("f0196", "Our services")}</h3>
            <a href={cms("f0197", "/services/junk-removal")}>{cms("f0198", "Junk Removal")}</a>
            <a href={cms("f0199", "/services/painting")}>{cms("f0200", "Painting")}</a>
            <a href={cms("f0201", "/services/pool-cleaning")}>{cms("f0202", "Pool Cleaning")}</a>
            <a href={cms("f0203", "/services/power-washing")}>{cms("f0204", "Power Washing")}</a>
            <a href={cms("f0205", "/services/renovating")}>{cms("f0206", "Renovating")}</a>
            <a href={cms("f0207", "/services/property-cleaning")}>{cms("f0208", "Property Cleaning")}</a>
            <a href={cms("f0209", "/services/tile-replacement-installation")}>{cms("f0210", "Tile Replacement & Installation")}</a>
            <a href={cms("f0211", "/services/floor-renovation")}>{cms("f0212", "Floor Renovation")}</a>
            <a href={cms("f0213", "/services/demolition")}>{cms("f0214", "Demolition")}</a>
          </div>
        </div>
        <div className={"footer-wordmark"} aria-hidden="true">{cms("f0215", "VETERAN")}<span>★</span></div>
        <div className={"footer-bottom"}>
          <span>{cms("f0216", "© 2026 Veteran Solutions and Services LLC")}</span>
          <span className={"footer-policy-links"}>
            <a href={cms("f0217", "/legal/privacy")}>{cms("f0218", "Privacy Policy")}</a>
            <a href={cms("f0219", "/legal/terms")}>{cms("f0220", "Terms of Use")}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function CmsIndex() {
  const { data } = useSuspenseQuery(publicSiteQuery);
  return <PublicServicesProvider services={data.services}><CmsProvider content={data.content}><Index /></CmsProvider></PublicServicesProvider>;
}
