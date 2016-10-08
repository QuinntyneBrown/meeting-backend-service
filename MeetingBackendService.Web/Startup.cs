using Owin;
using Microsoft.Owin;
using Unity.WebApi;
using static MeetingBackendService.ApiConfiguration;
using static System.Web.Http.GlobalConfiguration;
using static MeetingBackendService.UnityConfiguration;

[assembly: OwinStartup(typeof(MeetingBackendService.Web.Startup))]

namespace MeetingBackendService.Web
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {            
            Configure(config =>
            {
                config.DependencyResolver = new UnityDependencyResolver(GetContainer());
                Install(config, app);
            });
        }
    }
}
