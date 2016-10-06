using System.Collections.Generic;

namespace MeetingBackendService.Models
{
    public class App
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Meeting> Meetings { get; set; } = new HashSet<Meeting>();
        public bool IsDeleted { get; set; }
    }
}
