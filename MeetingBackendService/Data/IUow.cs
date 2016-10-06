using MeetingBackendService.Models;

namespace MeetingBackendService.Data
{
    public interface IUow
    {
        IRepository<App> Apps { get; }
        IRepository<Meeting> Meetings { get; }
        void SaveChanges();
    }
}
