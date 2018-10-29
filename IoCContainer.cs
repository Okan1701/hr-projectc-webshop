using Microsoft.Extensions.DependencyInjection;
using klaas.Models;
using Microsoft.Extensions.Configuration;

namespace klaas
{

    public static class IoCContainer {
        public static ServiceProvider provider {get; set;}
        public static IConfiguration Configuration { get; set;}

    }
}